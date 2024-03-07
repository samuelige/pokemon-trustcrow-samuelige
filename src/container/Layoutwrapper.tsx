import React, {FC} from 'react'
import Providers from '@/_lib/providers'
import { IChildren } from '@/types/children'
import Header from './Header'
import ContextProvider from '@/_lib/Context/ContextProvider'
import MuiTheme from '@/_lib/MuiTheme'

const Layoutwrapper:FC<IChildren> = ({children}) => {
  return (
    <div className='h-screen overflow-auto bg-white'>
        <Providers>
          <ContextProvider>
              <MuiTheme>
              <Header/>
                {children}
              </MuiTheme>
          </ContextProvider>
            
        </Providers>
    </div>
  )
}

export default Layoutwrapper