package za.co.mach.liveconsult.cucumber.stepdefs;

import za.co.mach.liveconsult.LiveconsultApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = LiveconsultApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
