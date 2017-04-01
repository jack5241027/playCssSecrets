import React from 'react'
import Header from '../components/Header'

class Ch2 extends React.Component {
    render() {
        return (
            <div className='page'>
                <Header />
                <main className='page-ch2'>
                    <div className='showcase showcase--color-background'>
                        <h2 className='showcase__title showcase__title-left'>半透明邊框 Issue</h2>
                        <h3 className='showcase__inner-title showcase__inner-title--liner'>
                            <span className='showcase__inner-title-text'>當內容物背景是白色時，半透明顏色的邊框就會消失。</span>
                        </h3>
                        <div className='trans-boder-block'>
                            <p>這是一個具有半透明邊框的區塊，但看不到邊框</p>
                        </div>
                        <h3 className='showcase__inner-title showcase__inner-title--liner'>
                            <span className='showcase__inner-title-text'>原因</span>
                        </h3>
                        <div className='trans-boder-block trans-boder-block--show-border'>
                            <p>預設，背景會延伸到邊框底下</p>
                            <p>邊框包含在寬度內</p>
                        </div>
                        <h3 className='showcase__inner-title showcase__inner-title--liner'>
                            <span className='showcase__inner-title-text'>解法</span>
                        </h3>
                        <div className='trans-boder-block trans-boder-block--fix'>
                            <p>使用 <span className='under-line'>background-clip</span> 屬性</p>
                            <p>預設值：<span className='under-line'>border-box</span>，代表背景延伸到 border-box 邊緣</p>
                            <p>設值為：<span className='under-line'>padding-box</span>，希望背景不要延伸到邊框下方</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Ch2
