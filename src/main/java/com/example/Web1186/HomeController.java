package com.example.Web1186;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller //annotation xác định class này là Controller
public class HomeController {
    //Khi người dùng truy cập vào qua phương thức GET thì sẽ được đưa tới đây để xử lý
    @GetMapping("/")
    public String homePage() {
        //Trả về trang index.html (trang chủ)
        return "Homepage";
    }

    @GetMapping("/Helloword")
    public String homeHello() {
        //Trả về trang index.html (trang chủ)
        return "Helloword";
    }

    @GetMapping("/Login")
    public String Loginpage() {
        //Trả về trang index.html (trang chủ)
        return "Login";
    }

    @GetMapping("/dashbroad")
    public String Dashbroad() {
        //Trả về trang index.html (trang chủ)
        return "dashbroad";
    }

    @GetMapping("/CRUDadm2002")
    public String CRUDpage() {
        //Trả về trang index.html (trang chủ)
        return "CRUD";
    }

    @GetMapping("/listSp")
    public String listSpPage() {
        //Trả về trang index.html (trang chủ)
        return "dssanpham";
    }

    @GetMapping("/Orderadmin1186")
    public String Orderpage() {
        //Trả về trang index.html (trang chủ)
        return "Order";
    }

    @GetMapping("/Detail/{id}")
    public String Detailpage(@PathVariable int id) {
        System.out.println(id);

        return "Detail";
    }
}