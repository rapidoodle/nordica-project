// (function($){
    // "use strict";

jQuery(document).ready(function ($) {

    $('.pix-multifields-meta').each(function(){
        pix_init_multifields($(this));
    });

    $(document).on("change", ".pix_fields_field", function (e) {
        pix_update_multifields($(this).closest('.pix-multifields-meta'));
    });

    $(document).on("click", ".pix-multi-fields-add", function (e) {
       e.preventDefault();
       var $button = $(this);
       var item = '<div class="pix-multifields-item">';
                item += '<input class="pix_item_title pix_fields_field" type="text" placeholder="Title" />';
                item += '<input class="pix_item_value pix_fields_field" type="text" placeholder="Value" />';
                item += '<a href="#" class="pix_field_remove">Delete</a>';
            item += '</div>';
       $button.siblings('.pix-multi-fields-input').append(item);
       pix_init_fields_sortable($button.closest('.pix-multifields-meta'));
       pix_update_multifields($button.closest('.pix-multifields-meta'));
       return false;
    });


   $(document).on("click", ".pix_field_remove", function (e) {
       e.preventDefault();
       var $button = $(this);
       var field = $button.closest('.pix-multifields-meta');
       $button.closest('.pix-multifields-item').remove();
       pix_update_multifields(field);
       pix_init_fields_sortable(field);



    });
   $(document).on("click", ".meta-box-upload-button-remove", function (e) {
       e.preventDefault();
       var $button = $(this);
       $button.siblings('.meta-box-upload-value').val('');
       $button.siblings('.image-preview').html('');
    });

    $(document).on("click", ".meta-box-upload-button", function (e) {
       e.preventDefault();
       var $button = $(this);


       // Create the media frame.
       var file_frame = wp.media.frames.file_frame = wp.media({
          title: 'Select or upload image',
          library: { // remove these to show all
             type: 'image' // specific mime
          },
          button: {
             text: 'Select'
          },
          multiple: false  // Set to true to allow multiple files to be selected
       });

       // When an image is selected, run a callback.
       file_frame.on('select', function () {
          // We set multiple to false so only get one image from the uploader

          var attachment = file_frame.state().get('selection').first().toJSON();
          // console.log(attachment);
          $button.siblings('input[type="hidden"]').val(attachment.id);
          let img = '<img src="'+attachment.url+'" style="max-width:150px;height:auto;margin-top:20px;">';
          $button.siblings('.image-preview').html(img);
          // console.log("OK");
       });

       // Finally, open the modal
       file_frame.open();
    });




   $(document).on("click", ".upload_image_button", function (e) {
      e.preventDefault();
      var $button = $(this);


      // Create the media frame.
      var file_frame = wp.media.frames.file_frame = wp.media({
         title: 'Select or upload image',
         library: { // remove these to show all
            type: [ 'video', 'image' ] // specific mime
         },
         button: {
            text: 'Select'
         },
         multiple: false  // Set to true to allow multiple files to be selected
      });

      // When an image is selected, run a callback.
      file_frame.on('select', function () {
         // We set multiple to false so only get one image from the uploader

         var attachment = file_frame.state().get('selection').first().toJSON();
         // console.log(attachment);
         $button.siblings('input').val(attachment.id);
         // console.log("OK");
      });

      // Finally, open the modal
      file_frame.open();
      return false;
   });




   function pix_init_multifields(field){
       if(field.find('.pix-multi-fields-value').val()){
           var data = JSON.parse(field.find('.pix-multi-fields-value').val());
           console.log(data);
           if(data){
               // data = JSON.parse(data);
               // console.log(data);
               // field.find('.pix-multi-fields-value').val(JSON.stringify(data));
               // if(data.length>0&&data!=""){
                   field.find('.pix-multi-fields-input').html('');
                   $.each(data,function(i, f){
                       var title = f.title? f.title:'';
                       var value = f.value? f.value:'';
                       var item = '<div class="pix-multifields-item">';
                               item += '<input class="pix_item_title pix_fields_field" type="text" placeholder="Title" value="'+title+'" />';
                               item += '<input class="pix_item_value pix_fields_field" type="text" placeholder="Value" value="'+value+'" />';
                               item += '<a href="#" class="pix_field_remove">Delete</a>';
                            item += '</div>';
                       field.find('.pix-multi-fields-input').append(item);
                   });

               // }

           }
           // pix_init_fields_sortable(field);
           // pix_update_multifields(field);


       }
       pix_init_fields_sortable(field);

   }

   function pix_update_multifields(field){

       var out = [];
       let el = field.find('.pix-multi-fields-input');


       el.sortable( "refresh" );
       el.sortable( "refreshPositions" );
       el.find('.pix-multifields-item').each(function(){
           let title = $(this).find('.pix_item_title').val();
           let value = $(this).find('.pix_item_value').val();
           let temp = {
               title: title,
               value: value
           };
           if(temp.title || temp.value){
               out.push(temp);
           }

       });
       // console.log(out);
       // console.log(el);
       field.find('.pix-multi-fields-value').val(JSON.stringify(out));
       // if(out.length>0){
       //     el.find('.pix-multi-fields-value').val(JSON.stringify(out));
       // }else{
       //     el.find('.pix-multi-fields-value').val('');
       // }
   }

   function pix_init_fields_sortable(field){
       field.find('.pix-multi-fields-input').sortable({
          stop: function( event, ui ) {
              pix_update_multifields(field);
          }
        });
   }










   // Menu Options

   $(document).on("click", ".pix_menu_item_btn", function (e) {
       e.preventDefault();

       var res = $(this).parent().find('.pix-menu-item-res-data:first');
       var res_val = res.val();

       var options = [];

       // options.push({
		// 	type: "text",
		// 	name: "text",
		// 	title: "Text",
		// 	val: ""
		// });
        options.push({
			type: "icon",
			name: "menu_item_icon",
			title: "Icon",
			val: ""
		});

        var html = '';
		if(res_val){
            let res_data = false;
            try {
                res_data = JSON.parse(res_val);
            } catch (e) {
                console.log("Menu item data is not valid!");
            }
            if(res_data){
                $.each(res_data,function(i, v){
    				$.each(options,function(i, o){
    					if(o.name==v.name){
    						o.val = v.val;
    					}
    				});
    			});
            }

		}
        $.each(options,function(i, o){
            switch(o.type) {
				  case 'checkbox':
					  var opt = $('<input type="checkbox" class="uiswitch pix-el-settings-field large-text" />');
					  opt.attr('name', o.name);
					  if(o.val&&o.val!='off'){
						  opt.attr('checked', 'checked');
					  }
					  opt = $('<label>').append('<div class="pix_popup_label">'+ o.title + '</div>').append(opt);
					  opt = $('<div class="pix_popup_field">').append(opt);
					  opt = $('<div>').append(opt);
					  html += opt.html();
				    break;
				case 'color':
  					  var opt = $('<input type="text" value="#333" class="pix-color-field pix-el-settings-field" data-default-color="#effeff" />');
  					  opt.attr('name', o.name);
  					  if(o.val){
  						  opt.attr('value', o.val);
  					  }
  					  opt = $('<label>').append('<div class="pix_popup_label">'+ o.title + '</div>').append(opt);
  					  var classes = '';
  					  var dep = '';
  					  if(o.dependency){
  						  classes = 'pix-dependency';
  						  dep = 'data-field="'+o.dependency.field+'" data-val="'+o.dependency.val+'"';
  					  }
  					  opt = $('<div class="pix_popup_field '+classes+'" '+dep+'>').append(opt);
  					  opt = $('<div>').append(opt);
  					  html += opt.html();
  				    break;
				case 'icon':
					var opt = $('<input type="text" name="text" class="pix-el-settings-field large-text" placeholder="Icon name (Click on icon in the list)"/>');
					opt.attr('name', o.name);
					opt.attr('type', o.type);
					opt.attr('value', o.val);
					opt = $('<label>').append('<div class="pix_popup_label">'+ o.title + '</div>').append(opt);
					if(o.desc&&o.desc!=''){
						opt.append('<div class="pix-builder-desc">' + o.desc + '</div>');
					}
					opt = $('<div class="pix_popup_field pix_popup_icon_field">').append(opt);
					opt.append('<div style="pading-bottom:5px;"><input type="text" class="pix_param_icons_search" placeholder="Search..." /></div>');
					let iconsOut = '';
					iconsOut += '<div class="pix-header-builder-icons pix_param_icon_container">';

					let extraClass = '';
					if(o.val==='') extraClass = 'icon-selected';
					iconsOut += '<div data-value="" class="icon-item '+extraClass+'" title="Disable">';
					iconsOut += '</div>';

					$.each(pix_admin_opts_object.PIX_ICONS,function(j, icon){
						// console.log(Object.keys(icon)[0]);
						extraClass = '';
						if(o.val===Object.keys(icon)[0]) extraClass = 'icon-selected';
						iconsOut += '<div class="icon-item '+extraClass+'" data-value="'+Object.keys(icon)[0]+'" title="'+Object.keys(icon)[0]+'">';

						iconsOut += '<i class="'+Object.keys(icon)[0]+'"></i>';
						iconsOut += '</div>';
					});

					iconsOut += '</div>';
					opt.append(iconsOut);

					opt = $('<div>').append(opt);
					html += opt.html();
  				    break;
				  case 'select':
					  var classes = '';
					  var dep = '';
					  if(o.dependency){
						  classes = 'pix-dependency';
						  dep = 'data-field="'+o.dependency.field+'" data-val="'+o.dependency.val+'"';
					  }
					  var opt = $('<select/>');
						for (var i in o.options) {
							var s_opt = $("<option />", {value: i, text: o.options[i]});
							if(o.val==i){
								s_opt.attr("selected","selected");
							}
							s_opt.appendTo(opt);
						    // opt.append($('<option/>').html(o[i]));
						}
					  opt.attr('name', o.name);
					  opt.attr('class', 'pix-el-settings-field pix_select');

					  opt = $('<label>').append('<div class="pix_popup_label">'+ o.title + '</div>').append(opt);
					  opt = $('<div class="pix_popup_field '+classes+'" '+dep+'>').append(opt);
					  opt = $('<div>').append(opt);
					  html += opt.html();
				    break;
				  case 'image':

					var opt = $('<input type="text" value="" class="pix-el-settings-field large-text" />');
					opt.attr('name', o.name);
					let previewID = Math.random().toString(36).substr(2, 9);
					var imgPreview = $('<img id="'+previewID+'" class="image_upload_preview" style="display:none;" title="Image Preview"/>')
					if(o.val){
						opt.attr('value', o.val);
						imgPreview.attr("src", o.val).show();
					}
					var imageBtn = $('<button class="pix_header_upload_image button button-primary">Upload Image</button> ');
					var removeBtn = $('<button class="pix_header_remove_image button button-danger">remove Image</button>');
					opt = $('<label>').append('<div class="pix_popup_label">'+ o.title + '</div>').append(opt);
					if(o.desc&&o.desc!=''){
						opt.append('<div class="pix-builder-desc">' + o.desc + '</div>');
					}
					if(imgPreview){
						opt.append(imgPreview);
					}
					opt.append(imageBtn);
					opt.append(removeBtn);
					var classes = '';
					var dep = '';
					if(o.dependency){
						classes = 'pix-dependency';
						dep = 'data-field="'+o.dependency.field+'" data-val="'+o.dependency.val+'"';
					}
					opt = $('<div class="pix_popup_field pix_image_upload_field '+classes+'" '+dep+'>').append(opt);

					opt = $('<div>').append(opt);
					html += opt.html();
				  	break;
				  default:
					  var opt = $('<input type="text" name="text" class="pix-el-settings-field large-text" />');
					  opt.attr('name', o.name);
					  opt.attr('type', o.type);
					  opt.attr('value', o.val);
					  opt = $('<label>').append('<div class="pix_popup_label">'+ o.title + '</div>').append(opt);
					  if(o.desc&&o.desc!=''){
						  opt.append('<div class="pix-builder-desc">' + o.desc + '</div>');
					  }
					  opt = $('<div class="pix_popup_field">').append(opt);

					  opt = $('<div>').append(opt);
					  html += opt.html();
				}


			});


       $.alert({
			title: 'Options',
			useBootstrap: false,
			 theme: 'material',
			 animation: 'bottom',
			 closeAnimation: 'top',
			content: html,
			onContentReady: function(){
			},
			buttons: {
				cancel: {
		            text: 'Cancel',
					btnClass: 'btn-header-cancel',
		            action: function () {
		            }
		        },
				save: {
		            text: 'Save',
					btnClass: 'btn-header-save',
                    action: function () {
                               var temp = [];
                               $('body').find('.pix-el-settings-field').each(function (i, field) {
                                   let obj = {};
									obj.name = $(field).attr('name');
									// console.log(obj);
									if($(field).hasClass('uiswitch')){
										obj.val = $(field).is(":checked");
									}else if($(field).hasClass('pix_select')){
										obj.val = $(field).find(":selected").val();
									}else{
										obj.val = $(field).val();
									}
									temp.push(obj);
                               });
								setTimeout(function(){
                                    res.val(JSON.stringify(temp));
								}, 500);
                           }
		        }
		    }
		});


   });


   function check_dep(){
			$('.pix-dependency').each(function(){
				var field = $(this).data('field');
				var val = $(this).data('val');
				var el = $(this).closest('.jconfirm-content').find('[name="'+field+'"]');
				var res = val.split(' ');
				// if(el.val() == val){
				if(res.includes(el.val()) ){
					$(this).show();
				}else{
					$(this).hide();
				}
			});

		}

   $(document).on("click", ".icon-item", function (e) {
	   e.preventDefault();
	   $(this).closest('.pix_popup_icon_field').find('.pix-el-settings-field').val($(this).attr('data-value'));
	   $(this).closest('.pix-header-builder-icons').find('.icon-item').removeClass('icon-selected');
	   $(this).addClass('icon-selected');
	   return false;
   });
   $(document).on("change keydown paste input", ".pix_param_icons_search", function (e) {
   	let search = $(this).val();
   	$(this).closest('.pix_popup_icon_field').find(".icon-item").show().filter(function () {
   		return $(this).data('value').indexOf(search) < 0;
   	}).hide();

   });



});
