import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../Collection-preview/Collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {Collections} = this.state;
        return(
            <div className='shop-page'>
                {
                Collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )
                )
                }
            </div>
        )
    }
}

export default ShopPage;