'use client';

import { useMemo, useState } from 'react';
import {
  EyeOff,
  Grid3X3,
  Minus,
  Plus,
  RefreshCcw,
  Sparkles,
} from 'lucide-react';

const MIN_SIZE = 2;
const MAX_COLUMNS = 8;
const MAX_ROWS = 4;
const CARD_BACK = '/playtogether/weather/closed-card.png';
const FRONT_CARDS = Array.from({ length: 9 }, (_, index) => ({
  id: `weather-${index + 1}`,
  label: `Thẻ thời tiết ${index + 1}`,
  src: `/playtogether/weather/open-card-${index + 1}.png`,
}));

export default function PlayTogetherWeatherPage() {
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(2);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [cards, setCards] = useState<(string | null)[]>(
    Array.from({ length: 8 }, () => null)
  );
  const [clearedCards, setClearedCards] = useState<Set<number>>(new Set());

  const filledCards = useMemo(
    () =>
      cards.reduce(
        (total, card, index) =>
          total + (card || clearedCards.has(index) ? 1 : 0),
        0
      ),
    [cards, clearedCards]
  );

  const resizeGrid = (nextColumns: number, nextRows: number) => {
    setColumns(nextColumns);
    setRows(nextRows);
    setSelectedIndex(null);
    setCards(Array.from({ length: nextColumns * nextRows }, () => null));
    setClearedCards(new Set());
  };

  const resetGrid = () => {
    setSelectedIndex(null);
    setCards(previousCards => previousCards.map(() => null));
    setClearedCards(new Set());
  };

  const replaceSelectedCard = (cardSrc: string) => {
    if (selectedIndex === null) {
      return;
    }

    setCards(previousCards =>
      previousCards.map((currentCard, index) =>
        index === selectedIndex ? cardSrc : currentCard
      )
    );
    setClearedCards(previousCards => {
      const nextCards = new Set(previousCards);
      nextCards.delete(selectedIndex);
      return nextCards;
    });
  };

  const clearSelectedCard = () => {
    if (selectedIndex === null) {
      return;
    }

    setClearedCards(previousCards => {
      const nextCards = new Set(previousCards);
      nextCards.add(selectedIndex);
      return nextCards;
    });
  };

  return (
    <main className='relative z-10 min-h-dvh overflow-hidden bg-[#10122a] text-white'>
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:28px_28px]' />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,#36d6c655,transparent_60%)]' />
      <div className='pointer-events-none absolute right-[-12rem] bottom-[-10rem] h-96 w-96 rotate-12 border-[56px] border-[#ffcf4a]/25' />
      <div className='pointer-events-none absolute top-28 left-[-7rem] h-72 w-72 -rotate-12 border-[44px] border-[#ff6b9a]/20' />

      <section className='relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col gap-4 rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <div className='flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-[#ffcf4a] uppercase'>
              <Sparkles className='size-4' />
              Play Together
            </div>
            <h1 className='mt-1 text-3xl leading-none font-black tracking-normal text-white sm:text-4xl'>
              Bảng nhớ thẻ thời tiết
            </h1>
            <p className='mt-2 max-w-xl text-sm leading-5 font-semibold text-white/70'>
              Tạo bảng giống mini game, bấm chọn ô cần ghi nhớ, rồi chọn thẻ
              ở danh sách bên phải để đánh dấu.
            </p>
          </div>

          <div className='flex flex-wrap items-end gap-2'>
            <label className='grid gap-1 text-xs font-bold text-white/75 uppercase'>
              Cột
              <span className='flex overflow-hidden rounded-md border border-white/20 bg-[#171a3d] shadow-inner shadow-black/25'>
                <button
                  aria-label='Giảm số cột'
                  className='grid size-11 place-items-center border-r border-white/15 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  disabled={columns === MIN_SIZE}
                  type='button'
                  onClick={() => resizeGrid(columns - 1, rows)}
                >
                  <Minus className='size-4' />
                </button>
                <input
                  aria-label='Số cột'
                  className='h-11 w-12 bg-transparent text-center text-lg font-black text-white outline-none'
                  readOnly
                  type='text'
                  value={columns}
                />
                <button
                  aria-label='Tăng số cột'
                  className='grid size-11 place-items-center border-l border-white/15 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  disabled={columns === MAX_COLUMNS}
                  type='button'
                  onClick={() => resizeGrid(columns + 1, rows)}
                >
                  <Plus className='size-4' />
                </button>
              </span>
            </label>
            <label className='grid gap-1 text-xs font-bold text-white/75 uppercase'>
              Hàng
              <span className='flex overflow-hidden rounded-md border border-white/20 bg-[#171a3d] shadow-inner shadow-black/25'>
                <button
                  aria-label='Giảm số hàng'
                  className='grid size-11 place-items-center border-r border-white/15 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  disabled={rows === MIN_SIZE}
                  type='button'
                  onClick={() => resizeGrid(columns, rows - 1)}
                >
                  <Minus className='size-4' />
                </button>
                <input
                  aria-label='Số hàng'
                  className='h-11 w-12 bg-transparent text-center text-lg font-black text-white outline-none'
                  readOnly
                  type='text'
                  value={rows}
                />
                <button
                  aria-label='Tăng số hàng'
                  className='grid size-11 place-items-center border-l border-white/15 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  disabled={rows === MAX_ROWS}
                  type='button'
                  onClick={() => resizeGrid(columns, rows + 1)}
                >
                  <Plus className='size-4' />
                </button>
              </span>
            </label>
            <button
              className='inline-flex h-11 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/18 active:translate-y-0'
              type='button'
              onClick={resetGrid}
            >
              <RefreshCcw className='size-4' />
              Đóng lại
            </button>
          </div>
        </header>

        <div className='grid flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_296px]'>
          <section className='min-h-[420px] rounded-lg border border-white/15 bg-[#f6e6b5]/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-4'>
            <div className='mb-3 flex items-center justify-between gap-3'>
              <div className='inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm font-black text-white'>
                <Grid3X3 className='size-4 text-[#36d6c6]' />
                {columns} x {rows}
              </div>
              <div className='rounded-md border border-[#ffcf4a]/35 bg-[#ffcf4a]/15 px-3 py-2 text-sm font-black text-[#ffe58a]'>
                Đã đánh dấu {filledCards}/{cards.length}
              </div>
            </div>
            <p className='mb-3 text-sm leading-5 font-semibold text-white/70'>
              Bấm vào một ô trong bảng để chọn.
            </p>

            <div className='max-h-[calc(100dvh-208px)] overflow-auto rounded-md border border-white/10 bg-black/20 p-2 sm:p-4'>
              <div
                className={`mx-auto grid w-full ${
                  columns > 6 ? 'gap-1 sm:gap-2' : 'gap-2 sm:gap-3'
                }`}
                style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                  maxWidth: `${columns * 108}px`,
                }}
              >
                {cards.map((card, index) => {
                  const isSelected = selectedIndex === index;
                  const isCleared = clearedCards.has(index);

                  return (
                    <button
                      aria-label={`Ô thẻ ${index + 1}`}
                      className={`group relative aspect-[708/816] min-w-0 overflow-hidden rounded-md border-2 bg-[#191c40] shadow-lg shadow-black/30 transition duration-200 hover:-translate-y-1 hover:shadow-[#36d6c6]/20 ${
                        isSelected
                          ? 'border-[#ffcf4a] ring-4 ring-[#ffcf4a]/35'
                          : 'border-white/15'
                      }`}
                      key={`${columns}-${rows}-${index}`}
                      type='button'
                      onClick={() => setSelectedIndex(index)}
                    >
                      <img
                        alt=''
                        className={`h-full w-full object-cover transition duration-200 group-hover:scale-105 ${
                          isCleared ? 'opacity-10' : 'opacity-100'
                        }`}
                        draggable={false}
                        src={card ?? CARD_BACK}
                      />
                      {isSelected ? (
                        <span className='pointer-events-none absolute inset-0 animate-pulse bg-[#ffcf4a]/12' />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <aside className='rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-4'>
            <div className='mb-3 flex items-center justify-between gap-3'>
              <h2 className='text-base font-black text-white'>
                Chọn mặt thẻ
              </h2>
              <span className='rounded-md border border-white/15 bg-black/20 px-2 py-1 text-xs font-black text-white/75'>
                {selectedIndex === null ? 'Chưa chọn ô' : `Ô ${selectedIndex + 1}`}
              </span>
            </div>
            <p className='mb-3 text-sm leading-5 font-semibold text-white/70'>
              Sau khi chọn ô, bấm một thẻ bên dưới để thay vào ô đó.
            </p>

            <div className='grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-2'>
              {FRONT_CARDS.map(card => (
                <button
                  aria-label={card.label}
                  className='group aspect-[708/816] overflow-hidden rounded-md border-2 border-white/15 bg-[#191c40] shadow-md shadow-black/25 transition duration-200 hover:-translate-y-1 hover:border-[#36d6c6] hover:shadow-[#36d6c6]/20 active:translate-y-0'
                  key={card.id}
                  type='button'
                  onClick={() => replaceSelectedCard(card.src)}
                >
                  <img
                    alt=''
                    className='h-full w-full object-cover transition duration-200 group-hover:scale-105'
                    draggable={false}
                    src={card.src}
                  />
                </button>
              ))}
              <button
                aria-label='Đánh dấu thẻ đã xóa'
                className='group flex aspect-[708/816] items-center justify-center overflow-hidden rounded-md border-2 border-white/15 bg-[#191c40] text-white/70 shadow-md shadow-black/25 transition duration-200 hover:-translate-y-1 hover:border-[#ff6b9a] hover:bg-[#ff6b9a]/15 hover:text-[#ff9fbd] hover:shadow-[#ff6b9a]/20 active:translate-y-0'
                type='button'
                onClick={clearSelectedCard}
              >
                <EyeOff className='size-1/2 stroke-[3]' />
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
