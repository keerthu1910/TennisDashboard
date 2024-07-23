import './style.scss';
import allgames from '../../assets/Menubar/AllGames.png';
import Categories from '../../assets/Menubar/Categories.png';
import Feature from '../../assets/Menubar/Feature.png';
import Score from '../../assets/Menubar/Group49.png';
import livegames from '../../assets/Menubar/LiveScore.png';
import video from '../../assets/Menubar/Video.png';
import Statistic from '../../assets/Menubar/Statistic.png';
import logo from '../../assets/Menubar/Subtract.png';
export const Menubar = () => {
    const menuitems = [{'img':allgames,'text':'All games'},
        {'img':livegames,'text':'Live Games','span-text':'LIVE'},
        {'img':Score,'text':'Score'},
        {'img':Categories,'text':'Categories'},
        {'img':video,'text':'Video'},
        {'img':Statistic,'text':'Statistic'},
    ]
    return(
        <div className='menubar-container'>
            <div className='logo-container'>
                <img className='logo-img' src={logo} alt='logo'/>
                <span className='logo-caption'>Tennis</span>
            </div>
            <div className='menu-list-container'>
                {
                    menuitems.map((item,index)=>(
                        <div key={index} className='menulistitem'>
                            <img className='menuitem-img' src={item.img}/>
                            <span className='menuitem-text'>{item.text}</span>
                            {item['span-text'] ? <span className='menuitem-span-text'>{item['span-text']}</span>:''}
                            
                        </div>
                    ))
                }
            </div>
            <div className='upgrade-container'>
                <img src={Feature} className='upgrade-image'/>
                <p className='upgrade-text'>Upgrade to <span className='bold-blue-text'>PRO</span> for <br></br>more features.</p>
                <button className='upgrade-btn'>Upgrade</button>
            </div>
        </div>
    )
}