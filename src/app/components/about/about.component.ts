import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutData = [
    {
      title: 'sales',
      content: 'Pre-sales is all about pitching technical proposals to clients. This stage is all about clarifying product details or service specifications and explaining the benefits they will offer. You may even be' +
        'required to carry out practical demonstrations of the applications or equipment that you’re selling.The second stage (sales) involves negotiations around pricing and other contractual terms, e.g. installation, warranties, etc. Once a sale is finalised, the I.T. sales professional will provide user guidance and training, technical support, system maintenance, repairs and product replacements in accordance with agreed warranties. ' +
        'Further activities include the preparation and renewal of service agreements, administering system and hardware updates, and advising clients on new and existing enterprise solutions. ' +
        'An I.T. sales professional’s core job objective is to maintain a balance between achieving sales and revenue targets, while also ensuring that customer expectations on cost, functionality and quality are met.'
    },
    {
      title: 'MOBILITY',
      content: 'Enterprise mobility is an approach to work in which employees can do their jobs from anywhere using a variety of devices and applications. The term commonly refers to the use of mobile devices, such as smartphones and tablets, for business purposes. But it also covers the mobility of corporate data and of workers themselves. As an example of enterprise mobility, an employee may upload a presentation from their desktop PC to a cloud storage service, and then access it from a personal Apple iPad to show at a client site.'
    },
    {
      title: 'engagement',
      content: 'This research paper was aimed at assessing the Employee Engagement levels in the IT industry  in India, the factors  that contribute  to Employee Engagement and  to suggest means  and ways  to improve  Employee Engagement levels in the industry being researched. The researcher set out to also identify the impact of demographic profile of employees on engagement. Also assessed in this empirical research was the influence  of  organizational  inputs  on  Employee  Engagement.  A  structured questionnaire  was  administered  to  employees  of  several  IT  companies  in  India. Research results indicate that the demographic profile of employees has an impact on employees’  engagement.  Organizational  inputs  and  support  has  an  influence  on engagement  and  that  committed  employees  were  more  engaged.  Several recommendations  are  suggested  to  improve  employee  engagement  based  on  the analysis of data collected for this research.'
    },
    {
      title: 'assurance',
      content: 'Software quality assurance refers to monitoring the software engineering processes and methods used to ensure quality. Various methods are employed for this, such as ensuring conformance to one or more standards, such as ISO 9000 or a model such as CMMI.'
    },
    {
      title: 'analytics',
      content: 'Analytics. ... Especially valuable in areas rich with recorded information, analytics relies on the simultaneous application of statistics, computer programming and operations research to quantify performance. Organizations may apply analytics to business data to describe, predict, and improve business performance.'
    },
    {
      title: 'application development',
      content: 'the applications of business development and the business developer or marketer tasks across industries and countries, cover everything from IT-programmers, specialized engineers, advanced marketing or key account management activities, and sales and relations development for current and prospective customers.'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
