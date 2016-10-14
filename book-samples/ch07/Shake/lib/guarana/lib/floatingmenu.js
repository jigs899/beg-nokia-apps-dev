(function(){Nokia.FloatingMenu=Nokia.Widget.extend({initialize:function(b){var a=this;var c={autoRender:true,elementHoverClass:"",transitions:false,offsetTop:0,offsetLeft:0};a.options=jQuery.extend(c,b);a.items=a.options.items;a._super.apply(a,[a.options]);a.registerData("floatingmenu");a.registerVibrationOn([]);if(a.options.autoRender){a.render()}},_attachEvents:function(){var a=this;jQuery(document.body).unbind("click.floatingmenu");jQuery(document.body).bind("click.floatingmenu",function(b){if(b.target&&b.target!=a.element[0]){a.hideMenu()}})},create:function(){var a=this,c=a.element,e=c.offset(),b=a.options,d=a.Styles;a.wrapper=Nokia.dom.parseHTML('<div class="'+[d.floatingMenu,d.uiWidgetContent].join(" ")+'"></div>');a.wrapper.css({top:e.top+b.offsetTop,left:e.left+b.offsetLeft}).hide();Nokia.dom.append(a.element,a.wrapper);Nokia.util.addClass(c[0],[d.uiClearfix,d.floatingMenuElement].join(" "));jQuery.each(a.items,function(g,h){var f=Nokia.dom.parseHTML('<a href="javascript:void(0);" class="'+d.floatingMenuItem+'">'+h.label+"</a>");f.addClass(h.classname?h.classname:d.uiStateDefault);f.bind("focus.floatingmenu",function(){Nokia.util.addClass(this,d.uiStateHover)});f.bind("blur.floatingmenu",function(){Nokia.util.removeClass(this,d.uiStateHover)});f.hover(function(){f.trigger("focus.floatingmenu")},function(){f.trigger("blur.floatingmenu")});f.bind("click.floatingmenu",function(i){if(h.callback){h.callback.apply(a,[i])}a.hideMenu();i.stopPropagation()});Nokia.util.bindEnter(f,function(i){f.trigger("click.floatingmenu")});Nokia.dom.append(a.wrapper,f)});a.fireCallback("create")},destroy:function(){var a=this;var b=a.Styles;if(a.wrapper){a.wrapper.remove()}if(a.element){a.element.removeClass(b.floatingMenuElement)}},hideMenu:function(){var a=this;a.wrapper.hide();a.element.removeClass(a.options.elementHoverClass);a.fireCallback("hide",null)},render:function(){var a=this;var b=a.Styles;if(a.options.element){a.element=jQuery(a.options.element);if(!a.element.hasClass(b.floatingMenuElement)){a._attachEvents();a.create()}}return a},showMenu:function(){var a=this;a.wrapper.show();a.element.addClass(a.options.elementHoverClass);a.fireCallback("show",null)},toggle:function(){var a=this;if(a.wrapper.is(":visible")){a.hideMenu()}else{a.showMenu()}a.fireCallback("toggle",null)},Styles:{floatingMenu:"nokia-floatingmenu",floatingMenuElement:"nokia-floatingmenu-element",floatingMenuItem:"nokia-floatingmenu-item",uiClearfix:"ui-helper-clearfix",uiStateDefault:"ui-state-default",uiStateActive:"ui-state-active",uiStateHover:"ui-state-hover",uiWidgetContent:"ui-widget-content",nokiaHidden:"nokia-hidden"}})})();