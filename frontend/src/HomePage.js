import React from 'react'

function HomePage() {
  return (
    <div className='Home_Page'>

    
    <div className='Welcome_page'>
      <h1>Welcome to Mirror</h1>
      <div className='home_page_center'>
        <table>
            <tbody className='Start_Question_Home_Page'>
                <tr >
                    <td>Do You want to activate your brain</td>
                </tr>
                <tr>
                    <td>
                        <button className='YES_Button'>
                            YES
                        </button>
                    </td>
                    <td>
                    <button className='NO_Button'>
                            NO
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default HomePage
