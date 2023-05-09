var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
 
  {

    name:'iphone 11',
    price:45000,
    discription:'iphone 11 is a good phone',
    Image:"https://as-images.apple.com/is/MX0H2_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1567304952106"

  },
  {

    name:'iphone 12',
    price:45000,
    discription:'iphone 12 is a good phone',
    Image:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"

  },
  {

    name:'iphone 13',
    price:45000,
    discription:'iphone 13 is a good phone',
    Image:"https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-491997702-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDkzMTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2gxMS85ODc4MTAyNjA1ODU0LmpwZ3w5NGFjNjk3MDQ1ZmU2Y2Q1YmY0ZTljZWM4N2JkMjdhNzE0ZmVlZDQxYzJhNjExNDdkZjY1MmQwYjQ2YTc0NWJm"

  },
  {

    name:'iphone 14',
    price:45000,
    discription:'iphone 14 is a good phone',
    Image:"https://media.croma.com/image/upload/v1662703541/Croma%20Assets/Communication/Mobiles/Images/261930_q0hq3w.png"

  },
  {

    name:'nokia',
    price:12000,
    discription:'nokia is a good phone  it is a good condition  and good performence',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7Hpp5obiFK_ljh2OHB_Ls0a89aHAz3EiDw&usqp=CAU"

  },
  {

    name:'iphone xr',
    price:79000,
    discription:'iphone xr is a good ',
    Image:"https://i0.wp.com/cliktodeal.com/wp-content/uploads/2022/06/iphone-XR-64gblu1.jpg?fit=1001%2C1000&ssl=1"

  },
  {

    name:'samsung',
    price:20000,
    discription:'samsung is a good phone \n it is good performance \n and full power\n ',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuJZ1haKIKQ7ZccscwggmiMnFuo5jq1BPKA&usqp=CAU"

  },
  {

    name:'lenova',
    price:5000,
    discription:'lenova is a good phone',
    Image:"https://tiimg.tistatic.com/fp/1/007/782/lenova-tablet-4g-and-wifi-lenova-yoga-tablet-lenova-mobile-tablet-424.jpg"

  },
  {

    name:'huawei',
    price:15000,
    discription:'huawei is a good phone',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd1vE32psyWQTzr-N_KjbttjEKSaiQT62cpTG0a63JH5VHQNer700sVLxIzWcCLq-upg&usqp=CAU"

  },
  {

    name:'redmi',
    price:14000,
    discription:'redmi is a good phone',
    Image:"https://i01.appmifile.com/webfile/globalimg/in/cms/BA485B45-ED16-7513-2CC7-66B392655326.jpg"

  },

  {

    name:'poco',
    price:30000,
    discription:'poco is a good phone',
    Image:"https://www.tradeinn.com/f/13867/138670019/xiaomi-smartphone-poco-m3-pro-5g-6-128gb.jpg"

  },
  {

    name:'realme',
    price:9000,
    discription:'realme it is a good phone',
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSB8OCW2GcfUxlzT5-u7-_oQ3CoI-LjnT4A&usqp=CAU"

  },

  ]

  res.render('index', {products});
});
router.get('/home', function(req, res, next) {

let list=[
{
  name:"sabith",
  age:15
},
{
  name:"ajmal",
  age:30
},
{
  name:"fasil",
  age:19
},
{
  name:"rahul",
  age:34
},
{
  name:"jhone",
  age:67
},
{
  name:"suhail",
  age:35
},
{
  name:"vaishnav",
  age:45
},

{
  name:"ashfaq",
  age:36
},

{
  name:"lalu",
  age:23
}


]
  res.render('home', {list});
});
router.get('/log', function(req, res, next) {

  let bikes=[
    {
    name:'duke',
    price:160000,
    Image:"https://media.zigcdn.com/media/model/2020/Mar/ktm-200-duke-bs6-right-side-view_360x240.jpg"
    },
    {
      name:'v3',
      price:140000,
      Image:"https://images.carandbike.com/bike-images/large/yamaha/r15-v30/yamaha-r15-v30.jpg?v=26"
      },
      {
        name:'honda',
        price:180000,
        Image:"https://www.drivespark.com/bikes-photos/models/450x350/herohfdeluxe_1666960090.jpg/3/x.pagespeed.ic.GypuEJSV5G.jpg"
        },
        {
          name:'hero splender',
          price:50000,
          Image:"https://5.imimg.com/data5/SELLER/Default/2022/5/GA/LU/PZ/152379188/hero-splendor-plus-bike-500x500.png"
        },
        {
          name:'ktm',
          price:190000,
          Image:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/102893/rc-125-2021-right-side-view-2.jpeg?isig=0"
        },
        {
          name:'rx100',
          price:120000,
          Image:"https://bd.gaadicdn.com/processedimages/yamaha/yamaha-rx-100/640X309/v_rx-100-std1561366088.jpg"
        },
        {
          name:'pulser',
          price:120000,
          Image:"https://www.hindinews11.com/wp-content/uploads/2022/11/bajaj-pulser.jpg"
        },
        {
          name:'revolte',
          price:175000,
          Image:"https://www.jagranimages.com/images/newimg/12072021/12_07_2021-revolte_400_21824641.jpg"
        },
        {
          name:'rx100',
          price:120000,
          Image:"https://bd.gaadicdn.com/processedimages/yamaha/yamaha-rx-100/640X309/v_rx-100-std1561366088.jpg"
        },
        {
          name:'pulser',
          price:120000,
          Image:"https://www.hindinews11.com/wp-content/uploads/2022/11/bajaj-pulser.jpg"
        },
        {
          name:'revolte',
          price:175000,
          Image:"https://www.jagranimages.com/images/newimg/12072021/12_07_2021-revolte_400_21824641.jpg"
        },
        {
          name:'revolte',
          price:175000,
          Image:"https://www.jagranimages.com/images/newimg/12072021/12_07_2021-revolte_400_21824641.jpg"
        }

  ]
  res.render('off', {bikes});
});


module.exports = router;
