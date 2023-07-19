'use client'

import { Repositorie } from './Repositorie'

export const ListRepositories = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh_-_4.5rem)] mt-[4.5rem]">
      <div className="grid grid-cols-1 my-8 md:my-0 md:grid-cols-2 gap-x-10 md:gap-x-18 lg:gap-x-36 xl:gap-x-64 gap-y-8">
        <Repositorie
          title="Airbnb Clone"
          href="adddddddddddd"
          repositorie="a novinha senta senta"
          img="https://user-images.githubusercontent.com/23248726/229031522-64a49ad0-66f7-4ea8-94a8-f64a0bb56736.png"
          label="lorem lorem lorem lorem lorem lorem lorem "
        />
        <Repositorie
          title="ChatGPT Clone"
          href="adddddddddddd"
          repositorie="a novinha senta senta"
          img="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          label="lorem lorem lorem lorem lorem lorem lorem "
        />
        <Repositorie
          title="*Em produção*"
          href="adddddddddddd"
          repositorie="a novinha senta senta"
          img="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          label="lorem lorem lorem lorem lorem lorem lorem "
        />
      </div>
    </div>
  )
}
