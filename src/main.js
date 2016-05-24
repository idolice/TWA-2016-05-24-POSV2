//TODO: Please write code in this file.
    function printInventory(inputs) {
    var  productsInfo = loadAllItems();
    var  products=[];

    function barcodeExist(barcode){
        for(var i=0;i<productsInfo.length;i++){
          if(barcode==productsInfo[i].barcode){
            return productsInfo[i];
          }
        }
        return 0;
    }

    function hasBarcode(barcode){
        for(var m=0;m<products.length;m++){
            if(products[m].barcode==barcode){
                return m;
              }
           }
        return -1;
    }

    function setValue(product){
        product.num=1;
    }

     function printResult(product){
        var sum=product.num*product.price;
        var singleString="名称："
                         +product.name
                         +"，数量："
                         +product.num
                         +product.unit
                         +"，单价："
                         +product.price.toFixed(2)
                         +"(元)，小计："
                         +sum.toFixed(2)
                         +"(元)"
                         +"\n";
        var result=new Object();
        result.str=singleString;
        result.sum=sum;
        return result;

        }

    for(var m=0;m<inputs.length;m++){

        if((temp=barcodeExist(inputs[m]))==0){
            continue;
        }

        var product=temp;
        if((j=hasBarcode(inputs[m]))!=-1)
          {
            products[j].num++;
          }else{
            setValue(product);
            products.push(product);
          }
    }

    var total=0;
    var beginString="***<没钱赚商店>购物清单***\n";
    var text=beginString;

    for(var j=0;j<products.length;j++){
            text=text+printResult(products[j]).str;
            total=total+printResult(products[j]).sum;
    }
    var endString="----------------------\n"+"总计："+total.toFixed(2)+"(元)"+"\n"+"**********************";
    text+=endString;
    console.log(text);

}