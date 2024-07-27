import React, { useState } from 'react'
import "../../../Assets/Styles/pages/Process/index.css"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Requirement from "../../../Assets/Images/Requirement.png"
import MockDevelopment from "../../../Assets/Images/MockDevelopment.png"
import actualDevelopment from "../../../Assets/Images/actualDevelopment.png"
import tests from "../../../Assets/Images/tests.png"
import promoteToStaging from "../../../Assets/Images/promoteToStaging.png"
import publishOperate from "../../../Assets/Images/publishOperate.png"
const Process = () => {
  const [tabNumber,setTabNumber] = useState("requirement")

  const handleTabs = (activTab)=>{
    setTabNumber(activTab)
  }

  const briefContent = 
   {
    requirement:'Requirement is the stage in which Project Manager will collect as much information from  Project Owner and create a business model to carry out development process. Which will be periodically reviewed by project owner and once business and functional module is finalized project manager will proceed with Scrum planning.'
 ,
    mockDevelopment:"Project manager will review the functional design with UI and API team. API  team will provide API specs to review. UI team will then create UI screens,  create Mock API then integrate Mock API with UI Screens. API team will create data design, and create Test data. Once PM reviews MocK integration API team  will consolidate API with Test data."
,
    actualDevelopment:"Once API is consolidated with test data, API team implement the API specs and UI team will integrate UI with Actual API and PM will review this integration."
  ,
    tests:"This phase involves writing the automation scripts for deployment and update/ upgrade and test it as per the test plan and get it ready for staging environment for review."
  ,
    promoteToStaging:"This stage involves moving features from test environment to stage environment and do production qualification tests."
    ,
    publishAndOperate:"This stage involves the verification of operation readiness and publishing the release notes to customers."
   }

  return (
  <>
  <section className='process_section space-container'>

{/* process left */}
<div className="process_section_left">

{/* left top will be added soooon */}

  {/* left bottom  */}
<div className="process_section_left_box">
  {/* buttons */}
  <button  onClick={() => handleTabs("requirement")}
    className={`tab-button ${tabNumber === "requirement" ? 'process_section_left_box_btn_active' : 'process_section_left_box_btn'}`}
  >
  requirement
  </button>

  <button 
   onClick={() => handleTabs("mockDevelopment")}
   className={`tab-button ${tabNumber === "mockDevelopment" ? 'process_section_left_box_btn_active' : 'process_section_left_box_btn'}`}
  >
  Mock development
  </button>
  
  <button 
   onClick={() => handleTabs("actualDevelopment")}
   className={`tab-button ${tabNumber === "actualDevelopment" ? 'process_section_left_box_btn_active' : 'process_section_left_box_btn'}`}
  >
  actual development
  </button>
  
  <button 
  onClick={() => handleTabs("tests")}
   className={`tab-button ${tabNumber === "tests" ? 'process_section_left_box_btn_active' : 'process_section_left_box_btn'}`}
  >
  ci / cd / tests
  </button>

  <button 
  onClick={() => handleTabs("promoteToStaging")}
   className={`tab-button ${tabNumber === "promoteToStaging" ? 'process_section_left_box_btn_active' : 'process_section_left_box_btn'}`}
  >
  promote to staging
  </button>


  <button 
  onClick={() => handleTabs("publishAndOperate")}
  className={`tab-button ${tabNumber === "publishAndOperate" ? 'process_section_left_box_btn_active' : 'process_section_left_box_btn'}`}

  >
  publish & operate
  </button>


</div>
</div>


<div className="process_section_right">
{/* wrapper starts */}
<div className="process_section_right_wrapper">
{/* headings */}
{tabNumber === "requirement" && <span className='process_section_right_heading'>1. Requirement</span>}
{tabNumber === "mockDevelopment" && <span className='process_section_right_heading'>2. Mock Development</span>}
{tabNumber === "actualDevelopment" && <span className='process_section_right_heading'>3. Actual Development</span>}
{tabNumber === "tests" && <span className='process_section_right_heading'>4.CI / CD / Tests</span>}
{tabNumber === "promoteToStaging" && <span className='process_section_right_heading'>5. Promote To Staging</span>}
{tabNumber === "publishAndOperate" && <span className='process_section_right_heading'>6. Publish & Operate</span>}

<div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
{tabNumber === "requirement" &&<p className='process_section_right_brief_para'>{briefContent.requirement}</p>}
{tabNumber === "mockDevelopment" && <p className='process_section_right_brief_para'>{briefContent.mockDevelopment}</p>}
 {tabNumber === "actualDevelopment" && <p className='process_section_right_brief_para'>{briefContent.actualDevelopment}</p>}
 {tabNumber === "tests" && <p className='process_section_right_brief_para'>{briefContent.tests}</p>}
 {tabNumber === "promoteToStaging" && <p className='process_section_right_brief_para'>{briefContent.promoteToStaging}</p>}
 {tabNumber === "publishAndOperate" && <p className='process_section_right_brief_para'>{briefContent.publishAndOperate}</p>}

</div>

  {/* /image  */}

  {tabNumber === "requirement" && <img className='process_section_right_img' src={Requirement} alt="unable to load image , check your internet connection" />}
  {tabNumber === "mockDevelopment" && <img className='process_section_right_img' src={MockDevelopment} alt="unable to load image , check your internet connection" />}
  {tabNumber === "actualDevelopment" && <img className='process_section_right_img' src={actualDevelopment} alt="unable to load image , check your internet connection" />}
  {tabNumber === "tests" && <img className='process_section_right_img' src={tests} alt="unable to load image , check your internet connection" />}
  {tabNumber === "promoteToStaging" && <img className='process_section_right_img' src={promoteToStaging} alt="unable to load image , check your internet connection" />}
  {tabNumber === "publishAndOperate" && <img className='process_section_right_img' src={publishOperate} alt="unable to load image , check your internet connection" />}

  {/* lists contaienr 1 */}
  {tabNumber === "requirement" &&
  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Create Information Architecture</li>
  <li>Create Functional Design</li>
  <li>Create Use Case Document</li>
  <li>Create UX Design Designs</li>
  <li>Do UX design review with tech team</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
  <li>Information Architecture and Functional Design is published in Business Docs</li>
  <li>Use Case Document is published in Use Cases Matrix</li>
  <li>UX Design is published in Use Cases Matrix</li>
  <li>ROI Analysys is published in Use Cases Matrix</li>
  <li>Functional Design Review meeting is done with Technical Team</li>
  <li>Scrum Planning with Micro Level Task Allocation is done</li>
</ul>
</div>
  </div>}

{/* list containr 2 */}
{tabNumber === "mockDevelopment" &&
  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Create OpenApi Specification</li>
  <li>Create Postman Tests for OpenAPi specification</li>
  <li>Create UI screens</li>
  <li>Create API simulator</li>
  <li>Create Test Data and integrate in simulator</li>
  <li>Integrate UI with Mock API</li>
  <li>Create Test Plans</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
  <li>Finalized API Specification is available in github</li>
  <li>API spec Review meeting is done with UI /API Team</li>
  <li>API specification is published</li>
  <li>UI code is available in GitHub that works with Mock API</li>
  <li>The code has adequate build / test instructions to run mock server and review UI</li>
  <li>Test Plans is available in Git and is published in Use Cases Matrix</li>
  <li>Data Design Page is published in Use Cases Matrix</li>
</ul>
</div>
  </div>}

  {/* list container 3 */}
  {tabNumber === "actualDevelopment" &&
  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Create API source Code in GitHub</li>
  <li>Create Junit5 Tests in GitHub</li>
  <li>Create Cucumber BDD tests in GitHub</li>
  <li>Create Gatling Performance/ Load Tests in GitHub</li>
  <li>Do Code Review with Tech Lead</li>
  <li>Do Actual UI-API integration</li>
  <li>Do Branch Merge After review</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
<li>API Development followed the git flow of projects (our gitops 
  workflow like branching/ merging etc) to develop actual API</li>
<li>API sample data is available in GitHub</li>
<li>Adequate readme instruction is available in GitHub to run 
with sample data</li>
<li>API are tested against postman collection generated in mock stage</li>
<li>All unit / functional / performance tests are written and kept in GitHub</li>
<li>All functional /performance tests meet SLA's</li>
<li>All functional / Performance Tests</li>
<li>Actual API works with UI by simply changing Base URL</li>
<li>API follows 10 Points API security verification</li>
<li>API is properly instrumented for performance metrics / logs / traces</li>
<li>Perf Metrics / Logs / Trace destination is configured</li>
</ul>
</div>
  </div>}


   {/* list container 4 */}
   {tabNumber === "tests" &&
  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
<li>CI/CD pipeline is created with common builders/ </li>
<li>deployer's / testers that we have created - custom 
tekton building blocks.</li>
<li>Kubernetes Operator is created for the services that
goes in cluster</li>
<li>Deploy in Test ENV via CI/CD pipeline</li>
<li>Do acceptance tests in test ENV</li>
<li>Upload Test results in S3 website and link with 
UseCase Matrix Page</li>
<li>Upload Test ENV URL in UseCase Matrix</li>
<li>Promote to stage env after revew with business lead.</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
 <li>Test results are loaded in S3 website and published</li>
 <li>Test ENV URL is accessible in UseCase Matrix Site</li>
 <li>CI/CD pipeline is integrated with tests(Unit / 
  functional ATP / performance )</li>
  <li>CI/CD pipeline can deploy the service in test ENV 
  with sample data</li>
  <li>CI/CD pipeline has the post-deployment verification available</li>
  <li>Adequate readme instruction is available in GitHub to 
  run the CI/CD pipeline</li>
  <li>Stage ENV URL is accessible from UseCase Matrix</li>
  <li>Adequate readme instruction is available to run stage testing by PM</li>
</ul>
</div>
  </div>}

    {/* list container 5 */}
    {tabNumber === "promoteToStaging" &&
  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Stage tests and review by PM</li>
  <li>PM Promote from Stage to Prod</li>
  <li>PM performs API security tests in prod</li>
  <li>PM creates/updates release notes</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
  <li>Stage Tests results are loaded in S3 website and linked with UseCase Matrix</li>
  <li>Prod ENV URL is accessible from release notes</li>
  <li>Prod ENV security Tests are accessible in UseCase Matrix</li>
  <li>Updated Product release is available in GitHub</li>
</ul>
</div>
  </div>}

   {/* list container 6*/}
   {tabNumber === "publishAndOperate" &&
  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
 <li>Prod ENV are reviewed by DevOps team from security 
 & operation readiness perspective</li>
 <li>PM announce the release note to world</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
   <li>Prod ENV confirms API security guideline</li>
   <li>Prod ENV rightly integrate with performance / trace / log manager</li>
   <li>Final announcement email is circulated to customers with a link 
   to release note by PM</li>
</ul>
</div>
  </div>}


  </div>
  {/* wrapper end  */}

  {/* accordian for mobile veiws */}
  <div className='accordian_wrapper'>
      <Accordion defaultExpanded >
        <AccordionSummary
      style={{background:"#484DD5"}}
          expandIcon={<ArrowDownwardIcon style={{color:"#FFF"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <span className='accordian_label'>Requirement</span>
        </AccordionSummary>
        <AccordionDetails>
        <span className='process_section_right_heading'>1. Requirement</span>
        <div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
<p className='process_section_right_brief_para'>{briefContent.requirement}</p>
</div>
{/* imag */}
<img className='process_section_right_img' src={Requirement} alt="unable to load image , check your internet connection" />
{/* lisrt con */}

  <div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Create Information Architecture</li>
  <li>Create Functional Design</li>
  <li>Create Use Case Document</li>
  <li>Create UX Design Designs</li>
  <li>Do UX design review with tech team</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
  <li>Information Architecture and Functional Design is published in Business Docs</li>
  <li>Use Case Document is published in Use Cases Matrix</li>
  <li>UX Design is published in Use Cases Matrix</li>
  <li>ROI Analysys is published in Use Cases Matrix</li>
  <li>Functional Design Review meeting is done with Technical Team</li>
  <li>Scrum Planning with Micro Level Task Allocation is done</li>
</ul>
</div>
  </div>
        </AccordionDetails>
      </Accordion>

      {/* mock devopment */}
      <Accordion >
        <AccordionSummary
      style={{background:"#484DD5"}}
          expandIcon={<ArrowDownwardIcon style={{color:"#FFF"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <span className='accordian_label'>Mock Development</span>
        </AccordionSummary>
        <AccordionDetails>
        <span className='process_section_right_heading'>2. Mock Development</span>
        <div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
<p className='process_section_right_brief_para'>{briefContent.mockDevelopment}</p>
</div>
{/* imag */}
<img className='process_section_right_img' src={MockDevelopment} alt="unable to load image , check your internet connection" />
{/* lisrt con */}

<div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Create OpenApi Specification</li>
  <li>Create Postman Tests for OpenAPi specification</li>
  <li>Create UI screens</li>
  <li>Create API simulator</li>
  <li>Create Test Data and integrate in simulator</li>
  <li>Integrate UI with Mock API</li>
  <li>Create Test Plans</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
  <li>Finalized API Specification is available in github</li>
  <li>API spec Review meeting is done with UI /API Team</li>
  <li>API specification is published</li>
  <li>UI code is available in GitHub that works with Mock API</li>
  <li>The code has adequate build / test instructions to run mock server and review UI</li>
  <li>Test Plans is available in Git and is published in Use Cases Matrix</li>
  <li>Data Design Page is published in Use Cases Matrix</li>
</ul>
</div>
  </div>
        </AccordionDetails>
      </Accordion>
 
 {/* actual devlopment */}
 <Accordion >
        <AccordionSummary
      style={{background:"#484DD5"}}
          expandIcon={<ArrowDownwardIcon style={{color:"#FFF"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <span className='accordian_label'>actual development</span>
        </AccordionSummary>
        <AccordionDetails>
        <span className='process_section_right_heading'>3. Actual Development</span>
        <div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
<p className='process_section_right_brief_para'>{briefContent.actualDevelopment}</p>
</div>
{/* imag */}
<img className='process_section_right_img' src={actualDevelopment} alt="unable to load image , check your internet connection" />
{/* lisrt con */}
<div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Create API source Code in GitHub</li>
  <li>Create Junit5 Tests in GitHub</li>
  <li>Create Cucumber BDD tests in GitHub</li>
  <li>Create Gatling Performance/ Load Tests in GitHub</li>
  <li>Do Code Review with Tech Lead</li>
  <li>Do Actual UI-API integration</li>
  <li>Do Branch Merge After review</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
<li>API Development followed the git flow of projects (our gitops 
  workflow like branching/ merging etc) to develop actual API</li>
<li>API sample data is available in GitHub</li>
<li>Adequate readme instruction is available in GitHub to run 
with sample data</li>
<li>API are tested against postman collection generated in mock stage</li>
<li>All unit / functional / performance tests are written and kept in GitHub</li>
<li>All functional /performance tests meet SLA's</li>
<li>All functional / Performance Tests</li>
<li>Actual API works with UI by simply changing Base URL</li>
<li>API follows 10 Points API security verification</li>
<li>API is properly instrumented for performance metrics / logs / traces</li>
<li>Perf Metrics / Logs / Trace destination is configured</li>
</ul>
</div>
  </div>

        </AccordionDetails>
      </Accordion>

      {/* Tests */}
      <Accordion >
        <AccordionSummary
      style={{background:"#484DD5"}}
          expandIcon={<ArrowDownwardIcon style={{color:"#FFF"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <span className='accordian_label'>ci / cd / tests</span>
        </AccordionSummary>
        <AccordionDetails>
        <span className='process_section_right_heading'>4.CI / CD / Tests</span>
        <div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
<p className='process_section_right_brief_para'>{briefContent.tests}</p>
</div>
{/* imag */}
<img className='process_section_right_img' src={tests} alt="unable to load image , check your internet connection" />
{/* lisrt con */}
<div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
<li>CI/CD pipeline is created with common builders/ </li>
<li>deployer's / testers that we have created - custom 
tekton building blocks.</li>
<li>Kubernetes Operator is created for the services that
goes in cluster</li>
<li>Deploy in Test ENV via CI/CD pipeline</li>
<li>Do acceptance tests in test ENV</li>
<li>Upload Test results in S3 website and link with 
UseCase Matrix Page</li>
<li>Upload Test ENV URL in UseCase Matrix</li>
<li>Promote to stage env after revew with business lead.</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
 <li>Test results are loaded in S3 website and published</li>
 <li>Test ENV URL is accessible in UseCase Matrix Site</li>
 <li>CI/CD pipeline is integrated with tests(Unit / 
  functional ATP / performance )</li>
  <li>CI/CD pipeline can deploy the service in test ENV 
  with sample data</li>
  <li>CI/CD pipeline has the post-deployment verification available</li>
  <li>Adequate readme instruction is available in GitHub to 
  run the CI/CD pipeline</li>
  <li>Stage ENV URL is accessible from UseCase Matrix</li>
  <li>Adequate readme instruction is available to run stage testing by PM</li>
</ul>
</div>
  </div>

        </AccordionDetails>
      </Accordion>

      {/* promote to staging */}
      <Accordion >
        <AccordionSummary
      style={{background:"#484DD5"}}
          expandIcon={<ArrowDownwardIcon style={{color:"#FFF"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <span className='accordian_label'>promote to staging</span>
        </AccordionSummary>
        <AccordionDetails>
        <span className='process_section_right_heading'>5. Promote To Staging</span>
        <div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
<p className='process_section_right_brief_para'>{briefContent.promoteToStaging}</p>
</div>
{/* imag */}
<img className='process_section_right_img' src={promoteToStaging} alt="unable to load image , check your internet connection" />
{/* lisrt con */}
<div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
  <li>Stage tests and review by PM</li>
  <li>PM Promote from Stage to Prod</li>
  <li>PM performs API security tests in prod</li>
  <li>PM creates/updates release notes</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
  <li>Stage Tests results are loaded in S3 website and linked with UseCase Matrix</li>
  <li>Prod ENV URL is accessible from release notes</li>
  <li>Prod ENV security Tests are accessible in UseCase Matrix</li>
  <li>Updated Product release is available in GitHub</li>
</ul>
</div>
  </div>

        </AccordionDetails>
      </Accordion>

      {/* publish & operate */}
      <Accordion >
        <AccordionSummary
      style={{background:"#484DD5"}}
          expandIcon={<ArrowDownwardIcon style={{color:"#FFF"}} />}
          aria-controls="panel1-content"
          id="panel1-header"
        > 
        <span className='accordian_label'>publish & operate</span>
        </AccordionSummary>
        <AccordionDetails>
        <span className='process_section_right_heading'>6. Publish & Operate</span>
        <div className="process_section_right_brief">
  <span className="process_section_right_brief_heading">Brief :</span>

{/* paragrapjhs */}
<p className='process_section_right_brief_para'>{briefContent.publishAndOperate}</p>
</div>
{/* imag */}
<img className='process_section_right_img' src={publishOperate} alt="unable to load image , check your internet connection" />
{/* lisrt con */}
<div className="process_section_right_list">
    {/* list box 1 */}
<div className="process_section_right_list_box1">
<h2 className='process_section_right_list_heading'>Tasks:</h2>
<ul className='process_section_right_list_ul'>
 <li>Prod ENV are reviewed by DevOps team from security 
 & operation readiness perspective</li>
 <li>PM announce the release note to world</li>
</ul>
</div>
{/* /list box 2 */}
<div className="process_section_right_list_box2">
<h2 className='process_section_right_list_heading'>Checklists:</h2>
<ul className='process_section_right_list_ul'>
   <li>Prod ENV confirms API security guideline</li>
   <li>Prod ENV rightly integrate with performance / trace / log manager</li>
   <li>Final announcement email is circulated to customers with a link 
   to release note by PM</li>
</ul>
</div>
  </div>

        </AccordionDetails>
      </Accordion>
    </div>

</div>



  </section>
  </>
  )
}

export default Process