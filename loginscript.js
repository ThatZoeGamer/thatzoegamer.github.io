function check(form)
{
 
 if(form.userid.value == "Admin" && form.pswrd.value == "CoolAdmin123$$")
  {
    window.open('\ihulerihjzdfihulhuilfdihulbhjdzghiulhiugfd.html')
  }
  else if(form.userid.value == "Betatester" && form.pswrd.value == "Betatestingisthebest654321$$$$$$")
  {
    window.open('\khjfshuisfhujfrhuildsfhuisfhuidfihuldfsa.html')
  }
 else if(form.userid.value == "georgethecool" && form.pswrd.value == "georgeisthebest123")
  {
    window.open('\hdfhdfkhdgkhjdiaegoiuaeruoipaer.html')
  }
 else
 {
   Swal.fire({
  icon: 'error',
  title: "Incorrect username/password",
  text: 'You have entered the wrong username/password, if you think this is a mistake, contact support',
  footer: 'helo'
})
  }
}

 (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2731198,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
