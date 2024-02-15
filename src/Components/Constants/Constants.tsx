import { CiWallet, CiShoppingCart  } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";

import img1 from '../../assets/item-1.png'
import img2 from '../../assets/item-2.png'
import img3 from '../../assets/item-3.png'
import img4 from '../../assets/item-4.png'
import { FaBitcoin } from "react-icons/fa";

import profile1 from '../../assets/profile-1.png'
import profile2 from '../../assets/profile-2.png'
import profile3 from '../../assets/profile-3.png'
import profile4 from '../../assets/profile-4.png'
import likes from '../../assets/like.gif'


export const navLinks = [
    {href: 'home', label:'Home'},
    {href: 'features', label:'Features'},
    {href: 'blog', label:'Blog'},
    {href: 'about', label:'Sellers'}
]

export const featuresCard = [
    {
        icon: <CiWallet style={{fontSize: '2rem'}}/>,
        title: 'Connect Wallet',
        info: 'Check if the NFT marketplace seamlessly integrates with popular cryptocurrency wallets. A smooth integration enhances security and convenience for both artists and buyers.'
    },
    {
        icon: <CiShoppingCart style={{fontSize: '2rem'}}/>,
        title: 'NFT Marketplace',
        info: 'The fastest and easiest way to fully unlock the potential of your digital assets. Create and run an exclusive marketplace for your NFT business today!.'
    },
    {
        icon: <AiOutlineAppstore style={{fontSize: '2rem'}}/>,
        title: 'Launch DApps',
        info: 'The FIRST deflationary NFT Launchpad that offers Game changing IDOs and NDOs, no gas wars, fair distribution and FREE NFT airdrops of new and upcoming NFT projects.'
    },
]

export const blogCards = [
    {
        cardImg: img1,
        title: 'CryptoArt',
        bitcoin: <FaBitcoin style={{color: "blue", fontSize: '1.2rem'}}/>,
        bitcoinRate: '0.29 BTC',
        page: '5 of 33',
        time: '2h 28m 1s',
        bid: 'Place a Bid'
    },
    {
        cardImg: img2,
        title: 'Abs-Art',
        bitcoin: <FaBitcoin style={{color: "blue", fontSize: '1.2rem'}}/>,
        bitcoinRate: '0.21 BTC',
        page: '7 of 12',
        time: '1h 28m 1s',
        bid: 'Place a Bid'
    },
    {
        cardImg: img3,
        title: 'TestArt',
        bitcoin: <FaBitcoin style={{color: "blue", fontSize: '1.2rem'}}/>,
        bitcoinRate: '0.21 BTC',
        page: '9 of 23',
        time: '4h 21m 1s',
        bid: 'Place a Bid'
    },
    {
        cardImg: img4,
        title: 'Art-4',
        bitcoin: <FaBitcoin style={{color: "blue", fontSize: '1.2rem'}}/>,
        bitcoinRate: '0.45 BTC',
        page: '1 of 33',
        time: '0h 28m 1s',
        bid: 'Place a Bid'
    },
]

export const btns = [
    {
        label: 'AsmrGraph'
    },
    {
        label: 'Abstract'
    },
    {
        label: 'Monkey'
    },
    {
        label: 'Cars'
    },
    {
        label: 'Trending'
    }
]

export const aboutCards = [
    {
        userImg: profile1,
        userName: 'Jhone D',
        likeIcon: likes,
        userLikes: '15.2k'
    },
    {
        userImg: profile2,
        userName: 'Gregory B',
        likeIcon: likes,
        userLikes: '12.7k'
    },
    {
        userImg: profile3,
        userName: 'Stephen E',
        likeIcon: likes,
        userLikes: '7.9k'
    },
    {
        userImg: profile4,
        userName: 'Rusell M',
        likeIcon: likes,
        userLikes: '4.2k'
    },
]

export const footerLinks = [
    {href: '/', label:'Privacy Policy'},
    {href: '/', label:'Cooperation'},
    {href: '/', label:'Sponsorship'},
    {href: '/', label:'Contact Us'}
]