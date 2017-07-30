import React from 'react'

const getDomStyle = (dom, attr) => {
    let elm = dom
    let styles = getComputedStyle(elm)
    return String(styles.getPropertyValue(attr)).trim()
}

const VerticalMiddle = () => {
    return (
        <div className='showcase showcase--middle-inner'>
            <h2 className='showcase__title showcase__title-left'>Flexible CSS(Visually vertical middle)</h2>
            <div className='middle-item' />
            <div className='middle-item middle-item--calc' />
            <div className='middle-item middle-item--pseudo' />
        </div>
    )
}

class Index extends React.Component {

    constructor(prop) {
        super()
        this.handleSwitchFontSize = this.handleSwitchFontSize.bind(this)
    }

    state = {
        showcaseSize: '20px'
    }

    handleSwitchFontSize() {
        let dom = this.showcase
        let fontSize = getDomStyle(dom, 'font-size')
        let nextSize = '20px'
        let lastSize = '16px'
        if (fontSize === nextSize) {
            nextSize = '16px'
            lastSize = '20px'
        } else {
            nextSize = '20px'
            lastSize = '16px'
        }
        dom.style.setProperty('font-size', nextSize)
        this.setState({
            showcaseSize: lastSize
        })
    }

    render() {
        let {showcaseSize} = this.state
        return (
            <main className='page page-index'>
                <h1 className='title'>Ch1. CSS 編寫技巧</h1>
                <div ref={(node) => { this.showcase = node }} className='showcase clearfix'>
                    <h2 className='showcase__title'>Flexible CSS(Color and Size with em)</h2>
                    <div className='showcase__content-wrap'>
                        <h3>Different Size</h3>
                        <div className='btn btn--sm'>Small</div>
                        <div className='btn btn--md'>Middle</div>
                        <div className='btn btn--bg'>Big</div>
                    </div>
                    <div className='showcase__content-wrap'>
                        <h3>Different Color</h3>
                        <div className='btn btn--fail'>Fail</div>
                        <div className='btn btn--succeed'>Succeed</div>
                        <div className='btn btn--submit'>Submit</div>
                    </div>
                    <div
                        className='btn float-right'
                        onClick={this.handleSwitchFontSize}
                    >
                        {`Switch parent em to ${showcaseSize}`}
                    </div>
                </div>
                <VerticalMiddle />
            </main>
        )
    }
}

export default Index
