import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden p-4 flex flex-col justify-between h-[360px]">
      <div className="w-full aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-xl mb-4" />
      <div className="space-y-2">
        <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
      </div>
      <div className="flex justify-between items-center pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800">
        <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-16" />
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-xl w-20" />
      </div>
    </div>
  );
};
