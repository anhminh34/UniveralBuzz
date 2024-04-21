package com.sacstate.Events;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class EventController {

    public String Events() {
        return "string";
    }

    @PostMapping("/submitEvent")
    public String submitEvent(@ModelAttribute Event event) {
        System.out.println(event);
        return "event";
    }

    public String getSquares(Model model) {
        int num = 20;
        model.addAttribute("num", num);

        return "squares";
    }


}