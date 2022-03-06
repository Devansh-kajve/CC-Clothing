import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [
                {
                  title: 'hats',
                  imageUrl: 'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1040A54MPA2252PT26X41Y4D1038993741FS1481/views/1,width=378,height=378,appearanceId=54,backgroundColor=F2F2F2,modelId=1795,crop=list/nft-millionaire-loading-investing-nfts-art-trucker-cap.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://media.stylus.com/global/processedimages/2021/july/_2021kd/brief/digi/tribute_brand_--__w_760_.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://media.gq.com/photos/6064d9607e3efcdc77d39b00/master/w_3240,h_2160,c_limit/05-nzxt_rtfkt-4k--.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        }
    }


    render(){
        return(
            <div className='directory-menu'>
                   {this.state.section.map(({id, ...otherSectionProps}) =>( 
                        <MenuItem key={id} {...otherSectionProps}/>
                   ))}     
            </div>
        );
    }
}


export default Directory;