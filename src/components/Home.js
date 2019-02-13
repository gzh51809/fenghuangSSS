import React,{Component} from 'react';

import { Carousel } from 'antd';

// let Home = ()=><div>Home</div>;
class Home extends Component{
    constructor(){
        super();
        this.state = {
            recommend:[
                {
                    text:'流',
                    imgurl:'img/g1(1).jpg'
                },
                {
                    text:'星',
                    imgurl:'img/g1(2).jpg'
                },{
                    text:'雨',
                    imgurl:'img/g1(3).jpg'
                },{
                    text:'落',
                    imgurl:'img/g1(4).jpg'
                },{
                    text:'英',
                    imgurl:'img/g1(5).jpg'
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