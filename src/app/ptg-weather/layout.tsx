import type { Metadata } from 'next';
import { Varela_Round } from 'next/font/google';

const title = 'Bảng nhớ thẻ thời tiết Play Together';
const description =
  'Công cụ ghi nhớ thẻ thời tiết cho mini game Play Together. Tạo bảng, chọn ô và đánh dấu mặt thẻ thật nhanh khi chơi.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Play Together',
    'Play Together weather',
    'mini game thẻ thời tiết',
    'ghi nhớ thẻ',
    'bảng nhớ thẻ Play Together',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

const varelaRound = Varela_Round({
  subsets: ['latin', 'vietnamese'],
  weight: '400',
});

export default function PlayTogetherWeatherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={varelaRound.className}>{children}</div>;
}
