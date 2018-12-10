<?php if(!defined('ABSPATH'))exit; ?>
<script type="application/javascript">
function wpw_ajx_translate(wpw_trl){
    var display_m;
    switch(wpw_trl) {
        case 'H1_01': 
            display_m =  "<?php _e("We found your main keyword in the H1 tag","wp-writup");?>";
            break;
        case 'H1_02':
            display_m =  "<?php _e("Add your main keyword in the H1 tag","wp-writup");?>";
            break;
        case 'H1_03':
            display_m =  "<?php _e("No h1 tag found","wp-writup");?>";
            break;
        case 'H1_04':
            display_m =  "<?php _e("You must not use more than 4 H1 tags","wp-writup");?>";
            break;
        case 'H2_01':
            display_m =  "<?php _e("We found all of the secondary keywords in the H2 tag","wp-writup");?>";
            break;
        case 'H2_02':
            display_m =  "<?php _e("All secondary keywords must be in H2 tag","wp-writup");?>";
            break;
        case 'H2_03':
            display_m =  "<?php _e("No h2 tag found","wp-writup");?>";
            break;
        case 'H3_0A':
            display_m =  "<?php _e("We found all your keywords in H3 tag","wp-writup");?>";
            break;
        case 'H3_01':
            display_m =  "<?php _e("We found some of your keywords in the H3 tag","wp-writup");?>";
            break;
        case 'H3_02':
            display_m =  "<?php _e("Add the main, secondary or lexical keywords in the H3 tag","wp-writup");?>";
            break;
        case 'H3_03':
            display_m =  "<?php _e("No h3 tag found","wp-writup");?>";
            break;
        case 'H4H5H6_00':
            display_m =  "<?php _e("We found all of your keywords in one of the H3, H4 or H5 tags","wp-writup");?>";
            break;
        case 'H4H5H6_01':
            display_m =  "<?php _e("We found some of your keywords in one of the H3, H4 or H5 tags","wp-writup");?>";
            break;
        case 'H4H5H6_02':
            display_m =  "<?php _e("It is advisable to add secondary or lexical keywords to H4, H5 or H6","wp-writup");?>";
            break;
        case 'H4H5H6_03':
            display_m =  "<?php _e("No H4, H5 or H6 tag was found, it is advisable to add","wp-writup");?>";
            break;
        case 'WDC_0A':
            display_m =  "<?php _e("words","wp-writup");?>";
            break;   
        case 'WDC_0B':
            display_m =  "<?php _e("Note","wp-writup");?>";
            break;   
        case 'WDC_01':
            display_m =  "<?php _e("The text is too short missing","wp-writup");?>";
            break;
        case 'WDC_02':
            display_m =  "<?php _e("The text includes the minimum number of words, however you should enrich it","wp-writup");?>";
            break;
        case 'WDC_03':
            display_m =  "<?php _e("The text includes many words, carry on like this","wp-writup");?>";
            break;
        case 'WDC_04':
            display_m =  "<?php _e("The text includes many words, bravo!","wp-writup");?>";
            break;
        case 'WDC_05':
            display_m =  "<?php _e("The text includes enough words, it's perfect!","wp-writup");?>";
            break;
        case 'P_0A':
            display_m =  "<?php _e("words","wp-writup");?>";
            break;   
        case 'P_01':
            display_m =  "<?php _e("One of your paragraphs is too short","wp-writup");?>";
            break;
        case 'P_02':
            display_m =  "<?php _e("The number of words in the paragraphs is correct!","wp-writup");?>";
            break;
        case 'P_03':
            display_m =  "<?php _e("One of your paragraphs is too large to","wp-writup");?>";
            break;
        case 'P_04':
            display_m =  "<?php _e("No paragraphs found","wp-writup");?>";
            break;
        case 'WDP_01':
            display_m =  "<?php _e("Your essay must contain no more than 25 per cent of sentences of more than 20 words","wp-writup");?>";
            break;
        case 'WDP_02':
            display_m =  "<?php _e("Your sentences have a good length","wp-writup");?>";
            break;
        case 'PK1_0A':
            display_m =  "<?php _e("it must be between 0.5% and 2.4%","wp-writup");?>";
            break;
        case 'PK1_01':
            display_m =  "<?php _e("The presence rate of the main keyword is","wp-writup");?>";
            break;
        case 'PK1_02':
            display_m =  "<?php _e("The presence rate of the main keyword is correct","wp-writup");?>";
            break;
        case 'PK23_01':
            display_m =  "<?php _e("Use at least once your secondary and lexical keywords","wp-writup");?>";
            break;
        case 'PK23_02':
            display_m =  "<?php _e("Your secondary and lexical keywords are used at least once","wp-writup");?>";
            break;
        case 'SK1_01':
            display_m =  "<?php _e("Add the main keyword in bold at least once","wp-writup");?>";
            break;
        case 'SK1_02':
            display_m =  "<?php _e("We found your main keyword at least once in bold","wp-writup");?>";
            break;
        case 'WDT_0A':
            display_m =  "<?php _e("it must be 30%","wp-writup");?>";
            break;
        case 'WDT_01':
            display_m =  "<?php _e("The rate of sentences with a transition word is","wp-writup");?>";
            break;
        case 'WDT_02':
            display_m =  "<?php _e("The rate of sentences with a transition word is correct","wp-writup");?>";
            break;
        case 'WDF_01':
            display_m =  "<?php _e("The text contains too many consecutive sentences beginning with the same word. Try to mix it all up!","wp-writup");?>";
            break;
        case 'IMG_01':
            display_m =  "<?php _e("We found no images on this page, add it to your cart !","wp-writup");?>";
            break;
        case 'IMGK1_01':
            display_m =  "<?php _e("The primary keyword must be used once in an ALT tag","wp-writup");?>";
            break;
        case 'IMGK1_02':
            display_m =  "<?php _e("We found the main keyword in an ALT tag","wp-writup");?>";
            break; 
        case 'IMG_02':
            display_m =  "<?php _e("Some picture on this page does not contain alt !","wp-writup");?>";    
            break;
        case 'IMG_03':
            display_m =  "<?php _e("Awesome ! All images on this page contain alt tags","wp-writup");?>";       
            break;
        case 'IMG_04':
            display_m =  "<?php _e("Ensure that the main keyword is present in an ALT tags","wp-writup");?>";       
            break;           
        case 'TTL_01':
            display_m =  "<?php _e("Add your main keyword in the title","wp-writup");?>";  
            break;
        case 'TTL_02':
            display_m =  "<?php _e("We found your main keyword in the title","wp-writup");?>";
            break;
        case 'TTLC_0A':
            display_m =  "<?php _e("characters","wp-writup");?>";       
            break;
        case 'TTLC_01':
            display_m =  "<?php _e("The title is too short","wp-writup");?>";       
            break;
        case 'TTLC_02':
            display_m =  "<?php _e("The title is too large by","wp-writup");?>";         
            break;
        case 'TTLC_03':
            display_m =  "<?php _e("The title of this page has a good length","wp-writup");?>";
            break;
        case 'WDFK1_0A':
            display_m =  "<?php _e("words","wp-writup");?>";
            break;  
        case 'WDFK1_01':
            display_m =  "<?php _e("The first main keyword is after","wp-writup");?>";
            break;
        case 'WDFK1_02':
            display_m =  "<?php _e("It must be present in the first 150 words of the text","wp-writup");?>";
            break;
        case 'WDFK1_03':
            display_m =  "<?php _e("The main keyword is found in the first 150 words of the text","wp-writup");?>";
            break;
        case 'ROT_0A':
            display_m =  "<?php _e("Reading","wp-writup");?>";
            break;
        case 'ROT_01':
            display_m =  "<?php _e("Very easy to read (Text easily understood by children)","wp-writup");?>";
            break;
        case 'ROT_02':
            display_m =  "<?php _e("Easy to read. (Text easily understood by juniors, cadets, beginners)","wp-writup");?>";
            break;
        case 'ROT_03':
            display_m =  "<?php _e("Quite easy to read. (Text easily understood by college, high school)","wp-writup");?>";
            break;
        case 'ROT_04':
            display_m =  "<?php _e("Relatively easy to read. (Text readily understood by students)","wp-writup");?>";
            break;
        case 'ROT_05':
            display_m =  "<?php _e("Hard enough to read. (Text readily understood by senior managers, graduates)","wp-writup");?>";
            break;
        case 'ROT_06':
            display_m =  "<?php _e("Difficult to read. (Text readily understood by diplomats)","wp-writup");?>";
            break;
        case 'ROT_07':
            display_m =  "<?php _e("Very difficult to read. (Text easily understood by parliamentarian)","wp-writup");?>";
            break;
        case 'HKP_01':
            display_m =  "<?php _e("Some similar keywords are too close, you must have at least 60 words between your same keywords.","wp-writup");?>";         
            break;       
        case 'WPW_UPDATE_01':
            display_m =  "<?php _e("Update","wp-writup");?>";              
            break;
        case 'WPW_UPDATE_02':
            display_m =  "<?php _e("An update is available","wp-writup");?>";              
            break;
        case 'WPW_UPDATE_03':
            display_m =  "<?php _e("Available version","wp-writup");?>";              
            break;
        case 'WPW_UPDATE_04':
            display_m =  "<?php _e("Enjoy our latest update in which we fixed some bugs and improved our plugin to provide you with a fluid writing experience.","wp-writup");?>";              
            break;
        case 'WPW_UPDATE_05':
            display_m =  "<?php _e("Update plugin","wp-writup");?>";              
            break;
        case 'WPW_UPDATE_06':
            display_m =  "<?php _e("This option requires updating the plugin","wp-writup");?>";
            break;
        case 'WPW_SUBWARLING_01':
            display_m =  "<?php _e("Octave can not analyze your incredible content. You must verify or activate your subscription. If you have never used our plugin, you can activate the trial version.","wp-writup");?>";              
            break;
        case 'WPW_SUBWARLING_02':
            display_m =  "<?php _e("Activate my version","wp-writup");?>";              
            break;
        case 'WHO_KEYWORD_01':
            display_m =  "<?php _e("Everything is ready on our side, when you start writing, the results of the analyzes are displayed as you go.","wp-writup");?>";
         break;
        case 'WHO_KEYWORD_02':
            display_m =  "<?php _e("Add keywords for your future content","wp-writup");?>";
         break;
        case 'WHO_KEYWORD_03':
            display_m =  "<?php _e("Start writing your content","wp-writup");?>";
         break;
        case 'WHO_KEYWORD_04':
            display_m =  "<?php _e("We will tell you what's wrong with your content","wp-writup");?>";
        break;
        case 'WPW_GRADE_0A':
            display_m =  "<?php _e("It's perfect ! You have done a very good job.","wp-writup");?>";
            break;
        case 'WPW_GRADE_0B':
            display_m =  "<?php _e("All right, you're near perfection, you're almost there.","wp-writup");?>";
         break;
        case 'WPW_GRADE_0C':
            display_m =  "<?php _e("YYou still have corrections to make, continue on this one.","wp-writup");?>";
         break;
        case 'WPW_GRADE_0D':
            display_m =  "<?php _e("This is a start, you have to start optimizing your content.","wp-writup");?>";
         break;
        case 'WPW_GRADE_0E':
            display_m =  "<?php _e("Not terrible, follow our advice to increase your overall rating.","wp-writup");?>";
         break;
        case 'WPW_GRADE_0F': 
            display_m =  "<?php _e("Do not worry, you just started writing.","wp-writup");?>";
         break;
        case 'SYN_0A':
            display_m =  "<?php _e("No synonyms available","wp-writup");?>";
        break;
        case 'SYN_0B':
            display_m =  "<?php _e("Synonym for the keyword","wp-writup");?>";
        break;
        case 'SYN_0C':
            display_m =  "<?php _e("This option is not available in your subscription","wp-writup");?>";
        break;
        case 'SYN_0D':
            display_m =  "<?php _e("Search manually","wp-writup");?>";
        break;
        case 'SYN_0E':
            display_m =  "<?php _e("This option is not available in the language of your editorial","wp-writup");?>";
        break;
        case 'SEM_0A':
            display_m =  "<?php _e("Octave collects the information necessary to carry out the semantic analysis of your text.","wp-writup");?>";
        break;
        case 'SEM_0B':
            display_m =  "<?php _e("This option is not available in your subscription","wp-writup");?>";
        break;
        case 'SEM_0C':
            display_m =  "<?php _e("This option is not available in the language of your editorial","wp-writup");?>";
        break;
        case 'SEM_01':
            display_m =  "<?php _e("Term to add","wp-writup");?>";
        break;
        case 'SEM_02':
            display_m =  "<?php _e("Context","wp-writup");?>";
        break;
        case 'SYNT_0A':
            display_m =  "<?php _e("We do not have sufficient information to synthesize your text.","wp-writup");?>";
        break;
        case 'SYNT_0B':
            display_m =  "<?php _e("This option is not available in your subscription","wp-writup");?>";
        break;      
        case 'SYNT_0C':
            display_m =  "<?php _e("Continue writing for your synthesis","wp-writup");?>";
        break;     
        case 'AUT_01':
            display_m =  "<?php _e("Your email address or password is invalid","wp-writup");?>";
        break;
        case 'REG_01':
            display_m =  "<?php _e("The username is already in use, choose another username.","wp-writup");?>";
        break;
        case 'REG_02':
            display_m =  "<?php _e("Your email address is already in use. If you already have an account, log in!","wp-writup");?>";
        break;
        case 'REG_03':
            display_m =  "<?php _e("Please enter a username!","wp-writup");?>";
        break;
        case 'REG_04':
            display_m =  "<?php _e("Please enter a valid email address!","wp-writup");?>";
        break;
        case 'REG_05':
            display_m =  "<?php _e("Please enter an email address!","wp-writup");?>";
        break;
        case 'REG_06':
            display_m =  "<?php _e("Please enter a password!","wp-writup");?>";
        break;
        case 'REG_07':
            display_m =  "<?php _e("Your password must be at least 6 characters long.","wp-writup");?>";
        break;
        case 'RPA_01':
            display_m =  "<?php _e("The specified email address is not associated with any WritUp account","wp-writup");?>";
        break;
        case 'CPA_01':
            display_m =  "<?php _e("Please enter the verification code.","wp-writup");?>";
        break;
        case 'CPA_02':
            display_m =  "<?php _e("The verification code is invalid.","wp-writup");?>";
        break;
        case 'CPA_03':
            display_m =  "<?php _e("Please enter a password!","wp-writup");?>";
        break;
        case 'CPA_04':
            display_m =  "<?php _e("Your password must be at least 6 characters long.","wp-writup");?>";
        break;
        case 'CPA_05':
            display_m =  "<?php _e("Your password has been changed!","wp-writup");?>";
        break;
        case 'ACC_01':
            display_m =  "<?php _e("Your account has been suspended! If you think your account has been banned or suspended by mistake? Write U.S.","wp-writup");?>";
        break;
        case 'YSU_01':
            display_m =  "<?php _e("Add this WordPress","wp-writup");?>";
        break;
        case 'YSU_02':
            display_m =  "<?php _e("Your subscription does not allow you to add any additional wordpress, you can add a new subscription or remove the obsolete wordpress","wp-writup");?>";
        break;
        case 'YSU_03':
            display_m =  "<?php _e("Your subscription allows you to add","wp-writup");?>";
        break;
        case 'YSU_04':
            display_m =  "<?php _e("wordpress extra","wp-writup");?>";
        break;
        case 'YSU_05':
            display_m =  "<?php _e("No wordpress related to your subscription!","wp-writup");?>";
        break;
        case 'YSU_06':
            display_m =  "<?php _e("Stop subscription","wp-writup");?>";
        break;
        case 'YSU_07':
            display_m =  "<?php _e("Expires on","wp-writup");?>";
        break;    
        case 'OFF_0A':
            display_m =  "<?php _e("Select","wp-writup");?>";
        break;
        case 'OFF_0B':
            display_m =  "<?php _e("month","wp-writup");?>";
        break;
        case 'OFF_01':
            display_m =  "<?php _e("No subscription is available for purchase at this time, come back later.","wp-writup");?>";
        break;
        case 'MODAL_01':
            display_m =  "<?php _e("Are you sure you want to remove this wordpress from your subscription?","wp-writup");?>";
        break;
        case 'MODAL_02':
            display_m =  "<?php _e("Are you sure you want to remove the automatic renewal of your subscription?","wp-writup");?>"; 
        break;
        case 'ERRLOD_0A':
            display_m =  "<?php _e("We have temporarily disabled this option.","wp-writup");?>"; 
        break;
        case 'ERRLOD_01':
            display_m =  "<?php _e("With our teams, our brand and our commitments, we are working together to improve our plugin. Thank you for your incredible patience.","wp-writup");?>"; 
        break;
        case 'OTAN_01':
            display_m =  "<?php _e("Select Country","wp-writup");?>"; 
        break;
        case 'OTAN_02':
            display_m =  "<?php _e("Select Language","wp-writup");?>"; 
        break;    
        case 'OTAN_DZA':
            display_m =  "<?php _e("Algeria","wp-writup");?>";
        break;
        case 'OTAN_DZA':
            display_m =  "<?php _e("Algeria","wp-writup");?>"; 
        break;
        case 'OTAN_GBR':
            display_m =  "<?php _e("United Kingdom","wp-writup");?>"; 
        break;
        case 'OTAN_ARE':
            display_m =  "<?php _e("United Arab Emirates","wp-writup");?>"; 
        break;
        case 'OTAN_SAU':
            display_m =  "<?php _e("Saudi Arabia","wp-writup");?>"; 
        break;
        case 'OTAN_BHR':
            display_m =  "<?php _e("Bahrain","wp-writup");?>"; 
        break;
        case 'OTAN_BEL':
            display_m =  "<?php _e("Belgium","wp-writup");?>"; 
        break;
        case 'OTAN_CAN':
            display_m =  "<?php _e("Canada","wp-writup");?>"; 
        break;
        case 'OTAN_DJI':
            display_m =  "<?php _e("Djibouti","wp-writup");?>"; 
        break;
        case 'OTAN_EGY':
            display_m =  "<?php _e("Egypt","wp-writup");?>"; 
        break;
        case 'OTAN_ESP':
            display_m =  "<?php _e("Spain","wp-writup");?>"; 
        break;
        case 'OTAN_USA':
            display_m =  "<?php _e("United States","wp-writup");?>"; 
        break;
        case 'OTAN_FRA':
            display_m =  "<?php _e("French","wp-writup");?>"; 
        break;
        case 'OTAN_IRQ':
            display_m =  "<?php _e("Iraq","wp-writup");?>"; 
        break;
        case 'OTAN_ISR':
            display_m =  "<?php _e("Israel","wp-writup");?>"; 
        break;
        case 'OTAN_JOR':
            display_m =  "<?php _e("Jordan","wp-writup");?>"; 
        break;
        case 'OTAN_KWT':
            display_m =  "<?php _e("Kuwait","wp-writup");?>"; 
        break;
        case 'OTAN_LBN':
            display_m =  "<?php _e("Lebanon","wp-writup");?>"; 
        break;
        case 'OTAN_LBY':
            display_m =  "<?php _e("Libya","wp-writup");?>"; 
        break;
        case 'OTAN_MAR':
            display_m =  "<?php _e("Morocco","wp-writup");?>"; 
        break;
        case 'OTAN_OMN':
            display_m =  "<?php _e("Oman","wp-writup");?>"; 
        break;
        case 'OTAN_QAT':
            display_m =  "<?php _e("Qatar","wp-writup");?>"; 
        break;
        case 'OTAN_SOM':
            display_m =  "<?php _e("Somalia","wp-writup");?>"; 
        break;
        case 'OTAN_CHE':
            display_m =  "<?php _e("Swiss","wp-writup");?>"; 
        break;
        case 'OTAN_TCD':
            display_m =  "<?php _e("Chad","wp-writup");?>"; 
        break;
        case 'OTAN_TUN':
            display_m =  "<?php _e("Tunisia","wp-writup");?>"; 
        break;
        case 'OTAN_PSE':
            display_m =  "<?php _e("Palestine","wp-writup");?>"; 
        break;
        case 'OTAN_ALL':
            display_m =  "<?php _e("Global","wp-writup");?>"; 
        break;
        case 'OTAN_TCD':
            display_m =  "<?php _e("Chad","wp-writup");?>"; 
        break;
        case 'OTAN_KRN':
            display_m =  "<?php _e("Kronos","wp-writup");?>";
        break;
        case 'SPEECH_R01':
            display_m =  "<?php _e("Listening is activated, you can dictate your text.","wp-writup");?>";
        break;
        case 'SPEECH_R02':
            display_m =  "<?php _e("You have disabled listening.","wp-writup");?>";
        break;
        case 'SPEECH_R03':
            display_m =  "<?php _e("A problem when detecting your voice. Retry","wp-writup");?>";
        break;
        case 'SPEECH_R04':
            display_m =  "<?php _e("The listening is deactivated after a long silence.","wp-writup");?>";
        break;
        case 'SPEECH_R05':
            display_m =  "<?php _e("Tap the microphone to dictate your text","wp-writup");?>";
        break;
    }        
    return display_m;
}
</script>