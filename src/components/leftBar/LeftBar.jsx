import "./leftBar.scss"
import Courses from "../../assets/courses.png";
import Events from "../../assets/events.png";
import Friends from "../../assets/friends.png";
import Fund from "../../assets/fundraiser.png";
import Gallery from "../../assets/gallery.png";
import Gaming from "../../assets/gaming.png";
import Groups from "../../assets/groups.png";
import Marketplace from "../../assets/marketplace.png";
import Memories from "../../assets/memories.png";
import Tutorials from "../../assets/tutorials.png";
import Videos from "../../assets/videos.png";
import Watch from "../../assets/watch.png";
import Messages from "../../assets/messages.png";

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img
                     src="https://images.pexels.com/photos/1261815/pexels-photo-1261815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                     alt=""
                    />
                    <span>Ali Mert Yılmaz</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Marketplace} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your Shortcuts</span>

                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>

                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;