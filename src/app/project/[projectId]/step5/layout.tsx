function Step5Layout ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <main className='flex flex-col gap-[32px] w-full max-w-[1280px] p-6'>
      {children}
    </main>
  )
}

export default Step5Layout
