// JavaScript Document
  function animate(element,target){
          clearInterval(element.animateTimer);
          var left = element.offsetLeft;
          var step = (target - left) / 10;
         element.animateTimer = setInterval(function(){
              left += step;
             element.style.left = left + 'px';
             if(Math.abs(target - left) <= Math.abs(step)){
                 clearInterval(element.animateTimer);
                 element.style.left = target + 'px';
             }
         },100);
     }

     window.onload =function(){
         var ul = document.getElementsByTagName('ul')[0];
         var spanArr = document.getElementsByTagName('span');
         //4.���һ����ʾ�󣬿�¡��һ��ͼƬ������ʾ��һ��
         ul.appendChild(ul.children[0].cloneNode(true));
         var ulLeft = ul.offsetLeft;
         console.log(ulLeft);
         var ulIndex = 0;  //Ĭ�ϵ�һ��ͼƬ�±�
         // console.log(ulLeft);
        //����
         var autoPlayTimer = setInterval(function(){            
      //4.2 �����һ�Ź��ص���һ��(ulIndex == 5)֮��  �����ûص�һ��״̬
             if(ulIndex == 5){
                ulIndex = 0;             
                 ul.style.left = '0';
                 ulLeft = 0;
               }           
             ulLeft -= 1290;             // console.log(ulLeft);
            animate(ul, ulLeft);
             ulIndex++;
             for(var i = 0; i< spanArr.length; i++){
                spanArr[i].className = '';
            }
            //4.3�ı�ҳ��  ������ͼƬ������ulIndex��4 
       //������ͼƬ����һ��ͼƬ��ulIndex��5  ������ulIndex%5�ָ�ulIndexΪ0 
             spanArr[ulIndex % 5].className = 'current';
        },3000);
         //�ڶ���  ��СԲ��span��ӵ���¼�
         for(var i = 0; i< spanArr.length; i++){
             var span = spanArr[i];
             span.index = i;
             span.onclick = function(){
                //ʵ�ֵ��span��ͼƬ�ƶ�
                 var targetLeft = -1290 * this.index; //0 - 4
                 //������Զ������� ��ǰԲ���Ӧ��ͼƬ��λ�ü�����800*�±�
                animate(ul, targetLeft);
                //��¼��ʱ��ulLeftΪ�˼����ӵ�ǰ���ͼƬ����һ��ͼƬ�ƶ�
                 ulLeft = targetLeft;
                 ulIndex = this.index;
                 //�л���ǰspanѡ����ʽ
                 for(var j = 0; j<spanArr.length; j++){
                     spanArr[j].className = '';
                 }
                 this.className = 'current';
             }
         }
    }
 