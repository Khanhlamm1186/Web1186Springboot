          let cnt=1;
        const showBtn = document.querySelector('#show')
        const hideBtn =document.querySelector('#hide')
        const div = document.querySelector('#formlogin')
        var pass='admin';
        showBtn.addEventListener('click', () => {
        div.style.visibility = 'visible'
        document.getElementById('loginn').innerHTML="LOGIN";
        })
        hideBtn.addEventListener('click', ()=> {
        div.style.visibility = 'hidden'
        })

        function Login(){
            var taikhoan=document.getElementById('username').value;
            var matkhau=document.getElementById('password').value;
            console.log(cnt);
          if(cnt%2==1){
            if(taikhoan=='' && matkhau==''){
                document.getElementById('demo0').innerHTML='Tai khoan rong';
                document.getElementById('demo').innerHTML='Mat khau rong';
            }else if(taikhoan=='' && matkhau!=''){
                document.getElementById('demo0').innerHTML='Tai khoan rong';
            }else if(taikhoan!='' && matkhau==''){
                document.getElementById('demo').innerHTML='Mat khau rong';
            }else if(taikhoan!='admin' && matkhau!=pass){
                document.getElementById('demo').innerHTML="Tài khoản hoặc mật khẩu không chính sác";
            }else if(taikhoan=='admin' && matkhau!=pass){
                document.getElementById('demo').innerHTML="Tài khoản hoặc mật khẩu không chính sác";
            }else if(taikhoan!='admin' && matkhau==pass){
                document.getElementById('demo').innerHTML="Tài khoản hoặc mật khẩu không chính sác";
            }else{
                const myTimeout = setTimeout(success,2000);
                document.getElementById('loginn').innerHTML="LOADING..."
            }
          }else{
            document.querySelector('#username').setAttribute('type','password');
            console.log("a");
            if(taikhoan=='' && matkhau==''){
                document.getElementById('demo0').innerHTML='hay nhap thong tin';
                document.getElementById('demo').innerHTML='hay nhap thong tin';
            }else if(taikhoan=='' && matkhau!=''){
                document.getElementById('demo0').innerHTML='hay nhap thong tin'
            }else if(taikhoan!='' && matkhau==''){
                document.getElementById('demo').innerHTML='hay nhap thong tin'
            }else if(taikhoan ==pass && matkhau==pass){
                document.getElementById('demo0').innerHTML="Trung mat khau";
            }else if(taikhoan!=pass){
                document.getElementById('demo0').innerHTML="Mat khau cu khong chinh sac";
            }else{
                alert("doi mat khau thanh cong");
                pass=matkhau;
                Forgot();
            }
          }
          function success(){
            document.getElementById('show').innerHTML="Đăng nhập thành công!";
            div.style.visibility = 'hidden';
            const myTimeout1 = setTimeout(moTrangadmin,500);
          }
          function moTrangadmin(){
            window.location.href="/CRUDadm2002";
          }

        }
        function Forgot(){
            cnt++;
            if(cnt%2==0){
                document.querySelector('#username').setAttribute('type','password');
                $("#username").attr("placeholder", "Oldpassword");
                $("#password").attr("placeholder", "Newpassword");
                document.getElementById('loginn').innerHTML="  SAVE  ";
                document.getElementById('fogot').innerHTML="Back To Login";
                document.getElementById('demo').innerHTML="";
                document.getElementById('demo0').innerHTML="";
                document.getElementById('title').innerHTML="Forgot Password";
                document.getElementById('username').value="";
                document.getElementById('password').value="";

            }else{
                document.querySelector('#username').setAttribute('type','text');
                $("#username").attr("placeholder", "Username");
                $("#password").attr("placeholder", "Password");
                document.getElementById('loginn').innerHTML="  LOGIN  ";
                document.getElementById('fogot').innerHTML="Forgot Password";
                document.getElementById('demo').innerHTML="";
                document.getElementById('demo0').innerHTML="";
                document.getElementById('username').value="";
                document.getElementById('password').value="";
                document.getElementById('title').innerHTML="Member Login";
                document.getElementById('username').value="";
                document.getElementById('password').value="";
            }
        }
        var obj=document.getElementById('username');
            obj.addEventListener('click', function(){
            document.getElementById('demo0').innerHTML="";
            document.getElementById('demo').innerHTML="";
            var us=document.getElementById('username').value;
            var ps=document.getElementById('password').value;
            console.log(us);
            if( ps!='' && us != ''){
                document.getElementById('loginn').innerHTML="LOGIN";
                const myTimeout = setTimeout(chuyenDoi,2000);

            }
        function chuyenDoi(){
            document.getElementById('loginn').innerHTML='LOGIN'
        }

        });
        var obj=document.getElementById('password');
            obj.addEventListener('click', function(){
            document.getElementById('demo').innerHTML="";
            document.getElementById('demo0').innerHTML="";

        });