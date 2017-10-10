var itemsArr=billDataEvent.detailgrid.store.data.items;
·É»ú
			for ( var int = 0; int < itemsArr.length; int++) {
				var date=itemsArr[int];
				var dataArr=itemsArr[int].data;
				console.info("dataArr");
				console.info(dataArr);
				console.info("dataArr");
				if(dataArr.ck==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(4).children().eq(0).children().eq(0).attr("class","");
				}
				if(dataArr.xz==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(5).children().eq(0).children().eq(0).attr("class","");
				}
				if(dataArr.xg==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(6).children().eq(0).children().eq(0).attr("class","");
				}
				if(dataArr.sc==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(7).children().eq(0).children().eq(0).attr("class","");
				}
				if(dataArr.sh==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(8).children().eq(0).children().eq(0).attr("class","");
				}
				if(dataArr.dy==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(9).children().eq(0).children().eq(0).attr("class","");
				}
				if(dataArr.dc==-1){
					$(".x-grid3-body").children().eq(int).children().eq(0).children().eq(0).children().eq(0).children().eq(10).children().eq(0).children().eq(0).attr("class","");
				}
				
			}