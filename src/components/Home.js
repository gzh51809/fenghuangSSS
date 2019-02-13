import React,{Component} from 'react';

import { Carousel } from 'antd';

// let Home = ()=><div>Home</div>;
class Home extends Component{
    constructor(){
        super();
        this.state = {
            recommend:[
                {
                    text:'01',
                    imgurl:'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01vm11kZ2JJhuTYCmRk-2053469401.jpg'
                },
                {
                    text:'02',
                    imgurl:'https://img.alicdn.com/imgextra/i1/2508158775/O1CN01kV0ktx2EgzyObpSNt_!!2508158775.jpg'
                },{
                    text:'03',
                    imgurl:'https://img.alicdn.com/imgextra/i3/2508158775/O1CN01mBTKjQ2EgzyRmTDw4_!!2508158775.jpg'
                },{
                    text:'04',
                    imgurl:'https://img.alicdn.com/imgextra/i2/2508158775/O1CN016jfM922EgzySBnxxl_!!2508158775.jpg'
                },{
                    text:'05',
                    imgurl:'https://img.alicdn.com/imgextra/i2/2508158775/O1CN01ZuR6152EgzyP1SnKo_!!2508158775.jpg'
                }
            ]
        }
    }
    render(){
        return <div className="home">
            <Carousel autoplay>
                {
                    this.state.recommend.map(item=>{
                        return <div key={item.text}>
                            <img src={item.imgurl}/>
                            <h4>{item.text}</h4>
                        </div>
                    })
                }
            </Carousel>
        </div>
    }
}
export default Home;