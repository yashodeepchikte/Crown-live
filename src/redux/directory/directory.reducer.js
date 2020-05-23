const INITIAL_STATE = {
sections : [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
      
    },
    {
      title: 'mens',
      imageUrl: 'https://lh3.googleusercontent.com/36ZAndsgPPm2WRiELcYXtm1zhxTLmbsnjdOx0ki9Dn3uY37h5larAFx7OnRu1W43gwXMZ5nOKwDPzNJog9MB4Kzb3JDzU5IeC5KMQSYbhn_pDLdgNWOlQdN4-Hnkb-RttnTBhxCbn3A=w2400',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
   
    }
  ]
};

const DirectoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default DirectoryReducer