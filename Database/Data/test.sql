-- Questions, possible answers and scoring

INSERT INTO question (id, question, cardinality)
 VALUES (1, 'Energy saving features(pick as many as apply; 7 points - one point each)', 1);

 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Compact fluorescent bulbs', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Energy efficient appliances', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Extra insulation', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Insulating blinds', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Solar panels', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Storm doors and windows', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (1, 'Water saving fixtures', 1);
 
INSERT INTO question (id, question, cardinality)
 VALUES (2, 'Energy saving habits (pick as many as apply; 7 points - one point each)', 1);

 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Turn off lights when leaving rooms', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Use power strips to turn off stand-by lights', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Turn off computers and monitors when not in use', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Dry clothes outside whenever possible', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Keep thermostat relatively low in winter', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Unplug small appliances when not in use', 1);
 INSERT INTO choice (question_id, choice, score)
  VALUES (2, 'Minimal use of power equipment when landscaping', 1);
 
INSERT INTO question (id, question, cardinality)
 VALUES (3, 'What best describes your diet? (pick one)', 0);

 INSERT INTO choice (question_id, choice, score)
  VALUES (3, 'Vegan – Plant based foods only (10 points)', 10);
 INSERT INTO choice (question_id, choice, score)
  VALUES (3, 'Vegetarian – Primarily plant based foods, but some dairy (8 points)', 8);
 INSERT INTO choice (question_id, choice, score)
  VALUES (3, 'Omnivore – An assortment of meat, seafood, vegetables, dairy, and grains (6 points)', 6);
 INSERT INTO choice (question_id, choice, score)
  VALUES (3, 'Carnivore – Meat, seafood, and dairy several times a week (4 points)', 4);
 INSERT INTO choice (question_id, choice, score)
  VALUES (3, 'Top of the food chain – Meat, seafood, or dairy at almost every meal (2 points)', 2);
 
INSERT INTO question (id, question, cardinality)
 VALUES (4, 'Do you have a garden or share one to grow your own vegetables and herbs? (5 points)', 0);

 INSERT INTO choice (question_id, choice, score)
  VALUES (4, 'Yes (5)', 5);
 INSERT INTO choice (question_id, choice, score)
  VALUES (4, 'No (0)', 0);

INSERT INTO question (id, question, cardinality)
 VALUES (5, 'If you have a garden (flower beds, vegetables, lawn) what is the main water source do you use for irrigation? (5 points)', 0);

 INSERT INTO choice (question_id, choice, score)
  VALUES (5, 'Mains water (0)', 0);
 INSERT INTO choice (question_id, choice, score)
  VALUES (5, 'Rain water (5)', 5);
 INSERT INTO choice (question_id, choice, score)
  VALUES (5, 'Nearby lake, pond, river (5)', 5);
 INSERT INTO choice (question_id, choice, score)
  VALUES (5, 'Greywater (5)', 5);
 
INSERT INTO question (id, question, cardinality)
 VALUES (6, 'Do you use pesticides, herbicides and/or synthetic fertilizers? (5 points)', 0);
 
 INSERT INTO choice (question_id, choice, score)
  VALUES (6, 'Yes (0)', 0);
 INSERT INTO choice (question_id, choice, score)
  VALUES (6, 'No (5)', 5);

-- Tags and question links  

INSERT INTO tag (id, name)
 VALUES (1, 'Energy');

 INSERT INTO question_tag (question_id, tag_id)
  VALUES (1, 1);
 INSERT INTO question_tag (question_id, tag_id)
  VALUES (2, 1);
  
INSERT INTO tag (id, name)
 VALUES (2, 'Food');
 
 INSERT INTO question_tag (question_id, tag_id)
  VALUES (3, 2);
 INSERT INTO question_tag (question_id, tag_id)
  VALUES (4, 2);
  
INSERT INTO tag (id, name)
 VALUES (3, 'Garden');
 
 INSERT INTO question_tag (question_id, tag_id)
  VALUES (5, 3);
 INSERT INTO question_tag (question_id, tag_id)
  VALUES (6, 4);