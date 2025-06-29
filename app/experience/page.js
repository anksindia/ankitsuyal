import TailwindBackgroundWrapper from '@/components/ui/TailwindBackgroundWrapper';

export default function Home() {
  return (
    <TailwindBackgroundWrapper>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Tailwind Play Clone
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is your content inside a custom diagonal-line patterned background like Tailwind Play.
      </p>
    </TailwindBackgroundWrapper>
  );
}
