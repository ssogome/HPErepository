<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="https://hpenterprise.sharepoint.com/teams/ProcurementTEST_O365/Script%20Library/jquery-ui.min.js"></script>



<script type="text/javascript">   

      var allField = "";

    $(function(){  
		              var buton = $("input[id$='SaveItem']"); 
				

                    buton.click(function(){  								
									DoSave();										
				    });						 
		
	});
function DoSave(){	  
function PreSaveAction(){  
					if($("input[title='Title Required Field']").val() == ''){
								$("input[title='Title Required Field']").focus()
							 return false;
					 }	
					if($("select[title$='GBU Required Field']").val() == 'None'){	
                               $("select[title$='GBU Required Field']").focus();					
							 return false;
			    	}
					if($("select[title$='Business Unit Required Field']").val() == 'None'){
								 $("select[title$='Business Unit Required Field']").focus();
							 return false;
			    	}
					if($("select[title$='SubGroup Required Field']").val() == 'None'){	
								 $("select[title$='SubGroup Required Field']").focus();
							 return false;
			    	}
					if($("select[title$='Purchase Type Required Field']").val() == 'None'){	
						//	alert("Please "  + $("select[title$='Purchase Type']").val() +" above");
							 var PurchaseTypeFocus =   $("select[title$='Purchase Type Required Field']");
						     PurchaseTypeFocus.focus();	
							
							 return false;
					}
					if($("option:selected",$("select[title='ShipmentToDestination Required Field']")).text() == 'None' ){  
								//alert('Please provide the shipment destination.');
								$("select[title='ShipmentToDestination Required Field']").focus();
						 return false;
					}
					if($("input[title='line1-part Required Field']").val() == ''){
							$("input[title='line1-part Required Field']").focus();
							 return false;
					 }
					if($("input[title='line1-description Required Field']").val() == ''){																
							 return false;
					 }
					if($("input[title='line1-cost Required Field']").val() == '' || $("input[title='line1-cost Required Field']").val().indexOf(',') != -1){													
							 return false;
					 }
					if($("textarea[title$='Justification Required Field']").val() == ''){ 	
							$("textarea[title$='Justification Required Field']").focus();
							 return false;
					 }
					if($("select[title$='Justification Class Required Field']").val() == ''){
							$("select[title$='Justification Class Required Field']").focus();
							 return false;
			    	}	
					if($("select[title='Impact Category Required Field']").val() == ''){	
							$("select[title='Impact Category Required Field']").focus();
							 return false;
					 }						 
				    if($("textarea[title$='Impact if not procured Required Field']").val()== ''){	   
							$("textarea[title$='Impact if not procured Required Field']").focus();
							 return false;
					}
	
 							return true;
}
    allField =  PreSaveAction();
		
}				

</script>
switch(nApr){
	case '2':				                            			
							if($().val() == "")	  $("input[title='line1-part Required Field']").focus();
							 return false; 
	case '3':					
                            if($().val() == "")   $("select[title$='GBU Required Field']").focus();					
							if($().val() == "")	  $("input[title='line1-part Required Field']").focus();
							 return false;		
			
}