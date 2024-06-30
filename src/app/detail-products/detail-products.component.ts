import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/product.service';
@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {
  public product_detail: any = ''
  constructor(private route: ActivatedRoute, @Inject(ProductsService) private _products_detail: ProductsService) { }

  async ngOnInit() {
    let id_detail = this.route.snapshot.paramMap.get('id') ?? '0';
    this._products_detail.getDetail_product(id_detail).subscribe(data => {
      this.product_detail = data
        console.log(this.product_detail);
    })

    // let id_detail = this.route.snapshot.paramMap.get('id') ?? '0';

    // this._products_detail.getDetail_product(id_detail).subscribe(data => {
    //   if (data) {
    //     // console.log(data);
    //     let id = this.route.snapshot.paramMap.get('id') ?? '0';
    //     console.log(id);

    //     this.product_detail = data.find((item: any, index: any) => {
    //       return item._id === id
    //     })
    //     // console.log(this.product_detail.Img);
    //   }
    // })

  }
  Data_Products: any = {
    products: [
      {
        id: 1,
        name: 'T Shirt',
        price: 25000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
        position_img: 'https://i.pinimg.com/564x/91/14/77/911477d01aca99ac724bb8b8abc13b4c.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/91/14/77/911477d01aca99ac724bb8b8abc13b4c.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'
          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/4e/27/98/4e27988c15806f0c590c938a2e9606ee.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/736x/67/cf/ce/67cfce773d8e0de2362b33dd69d36936.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/736x/4e/bb/53/4ebb534fbdd4759f459ce3c4efd5f438.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/6f/27/a1/6f27a1eeb0b25c2dab6ee27aa1e83e2e.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 2,
        name: 'T Shirt 2',
        price: 27000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        style: 'width: 20px; height: 20px; border-radius: 50%; background-color : blue ',
        position_img: 'https://i.pinimg.com/736x/2b/29/59/2b29593dc3934c352c5482a1e83d54e1.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/736x/6b/90/c1/6b90c1602e05449743cc1a2378d557c4.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'
          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/63/20/13/632013580fc9366361ee213036b3011c.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/a0/45/aa/a045aa07256eaacec37f7d3b5c6888d4.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/736x/a9/ba/52/a9ba52ec660587a7f12faff38454492f.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/f0/c4/3d/f0c43dac9fb3255e5ecd1e58bb41dbd3.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 3,
        name: 'T Shirt 3',
        price: 28000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        style: 'width: 20px; height: 20px; border-radius: 50%; background-color : gray ',
        position_img: 'https://i.pinimg.com/564x/24/8a/55/248a55b591434d1686e33103c0f02ac6.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/dd/ef/e4/ddefe4dc8cb8bd395566bb84ba0b82d8.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'
          },
          {
            id: 2,
            img: 'https://i.pinimg.com/736x/20/d5/f7/20d5f791cc60424fd0dc640979a3a11c.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/24/8a/55/248a55b591434d1686e33103c0f02ac6.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/564x/ec/77/09/ec7709092ce55fd6163ad23176a95882.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/57/6a/0f/576a0fb0cfb65f1e5537fbde892162fc.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 4,
        name: 'T Shirt 4',
        price: 30000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        style: 'width: 20px; height: 20px; border-radius: 50%; background-color : yellow ',
        position_img: 'https://i.pinimg.com/564x/91/14/77/911477d01aca99ac724bb8b8abc13b4c.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/d8/ad/e6/d8ade6840d7667ae4143188b6d29ee0d.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'
          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/9c/6f/e4/9c6fe43d3d40c197c80f9dfd84abf1cb.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/04/f3/43/04f34310f547a7b9f1db964e843be0e8.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/564x/36/1b/2d/361b2dfbe332ee7f428ae2582e72665a.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/5b/fd/cf/5bfdcfcaaa95114437c81bdd3832e6e6.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 5,
        name: 'T Shirt 5',
        price: 15000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        style: 'width: 20px; height: 20px; border-radius: 50%; background-color : black ',
        position_img: 'https://i.pinimg.com/564x/6c/8c/39/6c8c393710b50859b1cb25993dcd3732.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/6c/8c/39/6c8c393710b50859b1cb25993dcd3732.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'
          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/e6/75/1c/e6751cee646ccf47d6e5e7ebccde9eaa.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/736x/95/15/ab/9515ab6c4bab48e9279e4e7129808918.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/564x/a8/c7/a1/a8c7a18442bf918f1c3fcb6406b45416.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/dd/de/14/ddde149b1134c4387cd174a99b8d2e31.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 6,
        name: 'Trousers',
        price: 29000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        position_img: 'https://i.pinimg.com/736x/1a/54/d7/1a54d7d78eee13b2baea5f675787a6de.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/d0/cf/e1/d0cfe13bd63ca8ee1b49cafc1bbf5c7d.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'

          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/5d/ad/3f/5dad3f7294ff2176c0e3b9befdf6be17.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/736x/1a/54/d7/1a54d7d78eee13b2baea5f675787a6de.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/564x/1f/0e/34/1f0e345be9fc1dd44b41815634b967d4.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/51/8a/a8/518aa865cb70fd184ff6e8e08f8fa4f2.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 7,
        name: 'T Shirt 7',
        price: 32000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        position_img: 'https://i.pinimg.com/564x/91/14/77/911477d01aca99ac724bb8b8abc13b4c.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/87/3a/e2/873ae253ddaa228b5a44b8ada3afa3bf.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'

          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/2e/cb/77/2ecb77547b70051cf46608958e9f651f.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/19/5d/95/195d95ffb05d30856773b5a96ac81567.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/736x/83/c4/eb/83c4eba2cf3b39c00d04e938d3a5e148.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/f3/a4/11/f3a411eddc7b044d56a2089369da0cf9.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 8,
        name: 'T Shirt 8',
        price: 34000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        position_img: 'https://i.pinimg.com/564x/ab/0c/88/ab0c880492959104043a6397bee06338.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/d0/56/c2/d056c27e3c3dd8660e827eea4abd959d.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'

          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/17/6c/16/176c1690850a3cfd8ef6b9a54ded4507.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/ab/0c/88/ab0c880492959104043a6397bee06338.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/564x/12/b1/82/12b182d22957593d76ffe8018c398b1a.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/d8/df/97/d8df97ad11293047042767f9ac202cdd.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 9,
        name: 'T Shirt 9',
        price: 38000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        position_img: 'https://i.pinimg.com/564x/90/bb/ec/90bbecb7ed3aad330397bad4ba50ec0d.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/90/bb/ec/90bbecb7ed3aad330397bad4ba50ec0d.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'

          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/a3/48/d4/a348d42f94b7c4cda565b665c63c39c3.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/1c/fe/47/1cfe47062aac326d2e0e6b411e08d6cd.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/564x/77/6e/d4/776ed45f652fb6d4bbf2be093d51ff1a.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/5e/f2/db/5ef2db0762809d365c4491fd77925def.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
      {
        id: 10,
        name: 'T Shirt 10',
        price: 31000,
        description: "orem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price_unit: "USD",
        position_img: 'https://i.pinimg.com/564x/80/86/94/808694e3919932f44f8b2b4afe303781.jpg',
        position_size: 0,
        position_quantity: 1,
        Sizes: [
          {
            id: 1,
            value: '45*53',
            style: 'background-color:black; color:white'
          },
          {
            id: 2,
            value: '42*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 3,
            value: '40*40',
            style: 'background-color:black; color:white'
          },
          {
            id: 4,
            value: '35*49',
            style: 'background-color:black; color:white'
          }
        ],
        color_img: [
          {
            id: 1,
            img: 'https://i.pinimg.com/564x/4d/ff/85/4dff850a49d8d94522366a542f315980.jpg',
            style: 'width: 20px; height: 20px; border-radius: 50%; background-color : white ',
            text_color: 'white'

          },
          {
            id: 2,
            img: 'https://i.pinimg.com/564x/64/58/3f/64583f59285e45cb52ca9a1dad254236.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : blue;',
            text_color: 'blue'
          },
          {
            id: 3,
            img: 'https://i.pinimg.com/564x/c0/52/d3/c052d3617641625ee7528e47fb340caf.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : gray',
            text_color: 'gray'
          },
          {
            id: 4,
            img: 'https://i.pinimg.com/736x/5a/17/a0/5a17a010d4958905c4518037567cad4a.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : yellow',
            text_color: 'yellow'
          },
          {
            id: 5,
            img: 'https://i.pinimg.com/564x/80/86/94/808694e3919932f44f8b2b4afe303781.jpg',
            style: 'width: 20px; margin-left : 5px ; height: 20px; border-radius: 50% ;background-color : black',
            text_color: 'black'
          }
        ]
      },
    ],
    Cart: [

    ],
  }
}
