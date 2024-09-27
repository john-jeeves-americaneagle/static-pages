
    /*<![CDATA[*/
    (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
    ShopifyBuyInit();
} else {
    loadScript();
}
} else {
    loadScript();
}
    function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
}
    function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
    domain: '7d7095-03.myshopify.com',
    storefrontAccessToken: 'c56d65e5e31cd8919e1fa3e7218c5703',
});
    ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('collection', {
    id: '648481046857',
    node: document.getElementById('collection-component-1727452416088'),
    moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
    options: {
    "product": {
    "styles": {
    "product": {
    "@media (min-width: 601px)": {
    "max-width": "calc(25% - 20px)",
    "margin-left": "20px",
    "margin-bottom": "50px",
    "width": "calc(25% - 20px)"
},
    "img": {
    "height": "calc(100% - 15px)",
    "position": "absolute",
    "left": "0",
    "right": "0",
    "top": "0"
},
    "imgWrapper": {
    "padding-top": "calc(75% + 15px)",
    "position": "relative",
    "height": "0"
}
},
    "title": {
    "color": "#000000"
},
    "button": {
    "font-weight": "bold",
    "font-size": "14px",
    "padding-top": "15px",
    "padding-bottom": "15px",
    "color": "#000000",
    ":hover": {
    "color": "#000000",
    "background-color": "#e6b700"
},
    "background-color": "#ffcb00",
    ":focus": {
    "background-color": "#e6b700"
}
},
    "quantityInput": {
    "font-size": "14px",
    "padding-top": "15px",
    "padding-bottom": "15px"
},
    "price": {
    "color": "#000000"
},
    "compareAt": {
    "color": "#000000"
},
    "unitPrice": {
    "color": "#000000"
}
},
    "contents": {
    "button": false,
    "buttonWithQuantity": true
},
    "text": {
    "button": "Add to cart"
}
},
    "productSet": {
    "styles": {
    "products": {
    "@media (min-width: 601px)": {
    "margin-left": "-20px"
}
}
}
},
    "modalProduct": {
    "contents": {
    "img": false,
    "imgWithCarousel": true,
    "button": false,
    "buttonWithQuantity": true
},
    "styles": {
    "product": {
    "@media (min-width: 601px)": {
    "max-width": "100%",
    "margin-left": "0px",
    "margin-bottom": "0px"
}
},
    "button": {
    "font-weight": "bold",
    "font-size": "14px",
    "padding-top": "15px",
    "padding-bottom": "15px",
    "color": "#000000",
    ":hover": {
    "color": "#000000",
    "background-color": "#e6b700"
},
    "background-color": "#ffcb00",
    ":focus": {
    "background-color": "#e6b700"
}
},
    "quantityInput": {
    "font-size": "14px",
    "padding-top": "15px",
    "padding-bottom": "15px"
},
    "title": {
    "font-family": "Helvetica Neue, sans-serif",
    "font-weight": "bold",
    "font-size": "26px",
    "color": "#4c4c4c"
},
    "price": {
    "font-family": "Helvetica Neue, sans-serif",
    "font-weight": "normal",
    "font-size": "18px",
    "color": "#4c4c4c"
},
    "compareAt": {
    "font-family": "Helvetica Neue, sans-serif",
    "font-weight": "normal",
    "font-size": "15.299999999999999px",
    "color": "#4c4c4c"
},
    "unitPrice": {
    "font-family": "Helvetica Neue, sans-serif",
    "font-weight": "normal",
    "font-size": "15.299999999999999px",
    "color": "#4c4c4c"
}
},
    "text": {
    "button": "Add to cart"
}
},
    "option": {},
    "cart": {
    "styles": {
    "button": {
    "font-weight": "bold",
    "font-size": "14px",
    "padding-top": "15px",
    "padding-bottom": "15px",
    "color": "#000000",
    ":hover": {
    "color": "#000000",
    "background-color": "#e6b700"
},
    "background-color": "#ffcb00",
    ":focus": {
    "background-color": "#e6b700"
}
},
    "title": {
    "color": "#000000"
},
    "header": {
    "color": "#000000"
},
    "lineItems": {
    "color": "#000000"
},
    "subtotalText": {
    "color": "#000000"
},
    "subtotal": {
    "color": "#000000"
},
    "notice": {
    "color": "#000000"
},
    "currency": {
    "color": "#000000"
},
    "close": {
    "color": "#000000",
    ":hover": {
    "color": "#000000"
}
},
    "empty": {
    "color": "#000000"
},
    "noteDescription": {
    "color": "#000000"
},
    "discountText": {
    "color": "#000000"
},
    "discountIcon": {
    "fill": "#000000"
},
    "discountAmount": {
    "color": "#000000"
},
    "cart": {
    "background-color": "#cccccc"
},
    "footer": {
    "background-color": "#cccccc"
}
},
    "text": {
    "total": "Subtotal",
    "button": "Checkout"
},
    "popup": false
},
    "toggle": {
    "styles": {
    "toggle": {
    "font-weight": "bold",
    "background-color": "#ffcb00",
    ":hover": {
    "background-color": "#e6b700"
},
    ":focus": {
    "background-color": "#e6b700"
}
},
    "count": {
    "font-size": "14px",
    "color": "#000000",
    ":hover": {
    "color": "#000000"
}
},
    "iconPath": {
    "fill": "#000000"
}
}
},
    "lineItem": {
    "styles": {
    "variantTitle": {
    "color": "#000000"
},
    "title": {
    "color": "#000000"
},
    "price": {
    "color": "#000000"
},
    "fullPrice": {
    "color": "#000000"
},
    "discount": {
    "color": "#000000"
},
    "discountIcon": {
    "fill": "#000000"
},
    "quantity": {
    "color": "#000000"
},
    "quantityIncrement": {
    "color": "#000000",
    "border-color": "#000000"
},
    "quantityDecrement": {
    "color": "#000000",
    "border-color": "#000000"
},
    "quantityInput": {
    "color": "#000000",
    "border-color": "#000000"
}
}
}
},
});
});
}
})();
    /*]]>*/
