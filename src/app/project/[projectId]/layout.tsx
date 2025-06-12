function ProjectHomeLayout ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <main className='flex flex-col gap-[32px] row-start-2 items-center max-w-[1280px] mx-auto p-6'>
      {children}
    </main>
  )
}

export default ProjectHomeLayout
