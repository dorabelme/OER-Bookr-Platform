exports.seed = function (knex) {
            return knex('books').insert([
                {
                  title: 'Prealgebra',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/prealgebra',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/prealgebra_1.svg',
                  description: 'Prealgebra is designed to meet scope and sequence requirements for a one-semester prealgebra course. The book’s organization makes it easy to adapt to a variety of course syllabi. The text introduces the fundamental concepts of algebra while addressing the needs of students with diverse backgrounds and learning styles. Each topic builds upon previously developed material to demonstrate the cohesiveness and structure of mathematics.',
                  tag: 'Math'
                },
                {
                  title: 'Algebra and Trigonometry',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/algebra-and-trigonometry',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/algebra_trigonometry.svg',
                  description: 'Algebra and Trigonometry provides a comprehensive exploration of algebraic principles and meets scope and sequence requirements for a typical introductory algebra and trigonometry course. The modular approach and the richness of content ensure that the book meets the needs of a variety of courses. Algebra and Trigonometry offers a wealth of examples with detailed, conceptual explanations, building a strong foundation in the material before asking students to apply what they’ve learned.',
                  tag: 'Math'
                },
                {
                  title: 'Introductory Statistics',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/introductory-statistics',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/statistics.svg',
                  description: 'Introductory Statistics follows scope and sequence requirements of a one-semester introduction to statistics course and is geared toward students majoring in fields other than math or engineering. The text assumes some knowledge of intermediate algebra and focuses on statistics application over theory. Introductory Statistics includes innovative practical applications that make the text relevant and accessible, as well as collaborative exercises, technology integration problems, and statistics labs.',
                  tag: 'Math'
                },
                {
                  title: 'Astronomy',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/astronomy',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/astronomy.svg',
                  description: 'Astronomy is designed to meet the scope and sequence requirements of one- or two-semester introductory astronomy courses. The book begins with relevant scientific fundamentals and progresses through an exploration of the solar system, stars, galaxies, and cosmology. The Astronomy textbook builds student understanding through the use of relevant analogies, clear and non-technical explanations, and rich illustrations. Mathematics is included in a flexible manner to meet the needs of individual instructors.',
                  tag: 'Science'
                },
                {
                  title: 'Anatomy and Physiology',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/anatomy-and-physiology',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/anatomy_physiology.svg',
                  description: 'Anatomy and Physiology is a dynamic textbook for the two-semester human anatomy and physiology course for life science and allied health majors. The book is organized by body system and covers standard scope and sequence requirements. Its lucid text, strategically constructed art, career features, and links to external learning tools address the critical teaching and learning challenges in the course. The web-based version of Anatomy and Physiology also features links to surgical videos, histology, and interactive diagrams.',
                  tag: 'Science'
                },
                {
                  title: 'Microbiology',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/microbiology',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/microbiology.svg',
                  description: 'Microbiology covers the scope and sequence requirements for a single-semester microbiology course for non-majors. The book presents the core concepts of microbiology with a focus on applications for careers in allied health. The pedagogical features of the text make the material interesting and accessible while maintaining the career-application focus and scientific rigor inherent in the subject matter. Microbiology’s art program enhances students’ understanding of concepts through clear and effective illustrations, diagrams, and photographs.',
                  tag: 'Science'
                },
                {
                  title: 'American Government 2e',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/american-government-2e',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/american_government_2e_book_card.svg',
                  description: 'American Government 2e is designed to meet the scope and sequence requirements of the single-semester American Government course. This title includes innovative features designed to enhance student learning, including Insider Perspective features and a Get Connected module that shows students how they can get engaged in the political process. The book provides an important opportunity for students to learn the core concepts of American Government and understand how those concepts apply to their lives and the world around them.',
                  tag: 'Social Sciences'
                },
                {
                  title: 'Psychology',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/psychology',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/psychology.svg',
                  description: 'Psychology is designed to meet scope and sequence requirements for the single-semester introduction to psychology course. The book offers a comprehensive treatment of core concepts, grounded in both classic studies and current and emerging research. The text also includes coverage of the DSM-5 in examinations of psychological disorders. Psychology incorporates discussions that reflect the diversity within the discipline, as well as the diversity of cultures and communities across the globe.',
                  tag: 'Social Sciences'
                },
                {
                  title: 'U.S. History',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/us-history',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/US_history.svg',
                  description: 'U.S. History is designed to meet the scope and sequence requirements of most introductory courses. The text provides a balanced approach to U.S. history, considering the people, events, and ideas that have shaped the United States from both the top down (politics, economics, diplomacy) and bottom up (eyewitness accounts, lived experience). U.S. History covers key forces that form the American experience, with particular attention to issues of race, class, and gender.',
                  tag: 'Humanities'
                },
                {
                  title: 'Introduction to Sociology 2e',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/introduction-sociology-2e',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/sociology_2e.svg',
                  description: 'Introduction to Sociology 2e adheres to the scope and sequence of a typical, one-semester introductory sociology course. It offers comprehensive coverage of core concepts, foundational scholars, and emerging theories. The textbook presents section reviews with rich questions, discussions that help students apply their knowledge, and features that draw learners into the discipline in meaningful ways. The second edition has been updated significantly to reflect the latest research and current, relevant examples.',
                  tag: 'Social Sciences'
                },
                {
                  title: 'Principles of Accounting Volume 1',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/principles-financial-accounting',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/principles_of_acounting_volume_1_book_card.svg',
                  description: 'Principles of Accounting is designed to meet the scope and sequence requirements of a two-semester accounting course that covers the fundamentals of financial and managerial accounting. Due to the comprehensive nature of the material, we are offering the book in two volumes. This book is specifically designed to appeal to both accounting and non-accounting majors, exposing students to the core concepts of accounting in familiar ways to build a strong foundation that can be applied across business fields. Each chapter opens with a relatable real-life scenario for today’s college student. Thoughtfully designed examples are presented throughout each chapter, allowing students to build on emerging accounting knowledge. Concepts are further reinforced through applicable connections to more detailed business processes. Students are immersed in the “why” as well as the “how” aspects of accounting in order to reinforce concepts and promote comprehension over rote memorization.',
                  tag: 'Business'
                },
                {
                  title: 'Principles of Accounting Volume 2',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/principles-managerial-accounting',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/principles_of_acounting_volume_2_book_card_Vu9ykSz.svg',
                  description: 'Principles of Accounting is designed to meet the scope and sequence requirements of a two-semester accounting course that covers the fundamentals of financial and managerial accounting. Due to the comprehensive nature of the material, we are offering the book in two volumes. This book is specifically designed to appeal to both accounting and non-accounting majors, exposing students to the core concepts of accounting in familiar ways to build a strong foundation that can be applied across business fields. Each chapter opens with a relatable real-life scenario for today’s college student. Thoughtfully designed examples are presented throughout each chapter, allowing students to build on emerging accounting knowledge. Concepts are further reinforced through applicable connections to more detailed business processes. Students are immersed in the “why” as well as the “how” aspects of accounting in order to reinforce concepts and promote comprehension over rote memorization.',
                  tag: 'Business'
                },
                {
                  title: 'Business Ethics',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/business-ethics',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/business_ethics_card.svg',
                  description: 'Business Ethics is designed to meet the scope and sequence requirements of the single-semester business ethics course. This title includes innovative features designed to enhance student learning, including case studies, application scenarios, and links to video interviews with executives, all of which help instill in students a sense of ethical awareness and responsibility.',
                  tag: 'Business'
                },
                {
                  title: 'Introduction to Business',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/introduction-business',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/introduction_to_business.svg',
                  description: 'Introduction to Business covers the scope and sequence of most introductory business courses. The book provides detailed explanations in the context of core themes such as customer satisfaction, ethics, entrepreneurship, global business, and managing change. Introduction to Business includes hundreds of current business examples from a range of industries and geographic locations, which feature a variety of individuals. The outcome is a balanced approach to the theory and application of business concepts, with attention to the knowledge and skills necessary for student success in this course and beyond.',
                  tag: 'Business'
                },
                {
                  title: 'Organizational Behavior',
                  publisher: 'OpenStax',
                  license: 'License v4.0',
                  access_link: 'https://openstax.org/details/books/organizational-behavior',
                  thumbnail: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/organizational_behavior_book_card.svg',
                  description: 'This OpenStax resource aligns to introductory courses in Organizational Behavior. The text presents the theory, concepts, and applications with particular emphasis on the impact that individuals and groups can have on organizational performance and culture. An array of recurring features engages students in entrepreneurial thinking, managing change, using tools/technology, and responsible management; furthermore, the unique chapter on Social Media and Communication contextualizes the importance and implications of various platforms and communications methods.',
                  tag: 'Business'
                },
            ])
}
