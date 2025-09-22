-- Seed data for the businesses table
INSERT INTO businesses (name, address, industry, rating, phone, website) VALUES
('The Coffee Shop', '123 Main St, Anytown, USA', 'Food & Beverage', 4.5, '555-1234', 'http://www.thecoffeeshop.com'),
('The Book Nook', '456 Oak Ave, Anytown, USA', 'Retail', 4.8, '555-5678', 'http://www.thebooknook.com'),
('Tech Solutions Inc.', '789 Pine St, Anytown, USA', 'Technology', 4.2, '555-9012', 'http://www.techsolutions.com');

-- Seed data for the analyses table
INSERT INTO analyses (business_id, recommendations) VALUES
(1, '[{"automation_type": "Social Media", "description": "Engage with customers on Instagram.", "roi_estimate": 15.0, "complexity": "Low", "priority": "High"}]'),
(2, '[{"automation_type": "SEO", "description": "Optimize website for local search.", "roi_estimate": 20.0, "complexity": "Medium", "priority": "High"}]');

-- Seed data for the campaigns table
INSERT INTO campaigns (name, business_ids, status) VALUES
('Summer Promotion', ARRAY[1, 2], 'active'),
('Holiday Sale', ARRAY[3], 'draft');
