import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  food:any=[
    {
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMUI0cEeMGcIqVtGXmbCprLGtLFYO1zmuuIaa0c3xmDJpKqa-EYQT38VwfItH_TOe1vk&usqp=CAU",
      "name":"PORATTA AND BEEF",
      "price":"120",
      "buy":"buy now"
    },
    {
      "image":"https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/top-10-cuisine-you-should-try-in-kerala/dosa-ghee-roast-with-kerala-style-sambar-250x250.jpg&w=640&q=75",
      "name":"MASALA DHOSA",
      "price":"100",
      "buy":"buy now"
    },
    {
      "image":"https://img.onmanorama.com/content/dam/mm/en/food/in-season/Ramzan/Images/hyderabadi-dum-biryani.jpg",
      "name":"BIRIYANI",
      "price":"120",
      "buy":"buy now"
    },
    {
      "image":"https://recipes.timesofindia.com/thumb/75581339.cms?width=1200&height=900",
      "name":"CHICKEN FRIED RICE",
      "price":"150",
      "buy":"buy now"
    },
    {
      "image":"https://i.ytimg.com/vi/WBXgmNkyMz4/maxresdefault.jpg",
      "name":"KUZHI MADHI RICE",
      "price":"350",
      "buy":"buy now"
    },
    {
      "image":"https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/2/14/alfaham.jpg",
      "name":"ALFAHAM",
      "price":"300",
      "buy":"buy now"
    },
    {
      "image":"http://myheartbeets.com/wp-content/uploads/2014/05/kadai-chicken-recipe.jpg",
      "name":"KADAI CHICKEN",
      "price":"320",
      "buy":"buy now"
    },
    {
      "image":"https://i0.wp.com/www.sujiscooking.com/wp-content/uploads/2014/11/quailkada-fry.1024x1024.jpg?fit=1024%2C681&ssl=1",
      "name":"KADA FRY",
      "price":"350",
      "buy":"buy now"
    },
    {
      "image":"https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      "name":"PANEER BUTTER MASALA",
      "price":"340",
      "buy":"buy now"
    }
    
  ]

}
