import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../Preview-collection/preview-collection.component';

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
                {Collection.map(Collections => (
                    <div></div>
                ))}
                </div>
        )
    }
}

export default ShopPage;