CREATE TABLE businesses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    industry TEXT,
    rating FLOAT,
    phone TEXT,
    website TEXT,
    analysis_status TEXT DEFAULT 'pending'
);

CREATE TABLE analyses (
    id SERIAL PRIMARY KEY,
    business_id INTEGER REFERENCES businesses(id),
    recommendations JSONB
);

CREATE TABLE campaigns (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    business_ids INTEGER[],
    sent_count INTEGER DEFAULT 0,
    open_rate FLOAT DEFAULT 0.0,
    response_rate FLOAT DEFAULT 0.0,
    status TEXT DEFAULT 'draft'
);
