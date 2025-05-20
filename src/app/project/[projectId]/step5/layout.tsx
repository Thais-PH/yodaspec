function Step5Layout ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <main className='flex flex-col gap-8 w-full max-w-[1280px] mx-auto p-8 dark:bg-surface-10 bg-surface-light-10 dark:border-0 border-1 border-surface-light-30 shadow-md rounded-2xl dark:shadow-xl'>
      {children}
    </main>
  )
}

export default Step5Layout
