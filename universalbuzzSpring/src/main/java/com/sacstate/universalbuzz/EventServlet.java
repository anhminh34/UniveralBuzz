package com.sacstate.universalbuzz;
//EventServlet.java


import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet
public class EventServlet  extends HttpServlet{

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        PrintWriter pw = res.getWriter();
        //set Content type
        res.setContentType("text/html");
        //read the form values
        String name = req.getParameter("name");
        String date = req.getParameter("date");
        String description = req.getParameter("description");
        String location = req.getParameter("location");

        System.out.println("Name: " + name);
        System.out.println("Date: " + date);
        System.out.println("Description: " + description);
        System.out.println("location: " + location);

        //close the stream
        pw.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}