CREATE TABLE public.products (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  barcode text UNIQUE NOT NULL,
  product_name text,
  brand text,
  manufacturer text,
  country_of_origin text,
  manufacturing_places text,
  ingredients_text text,
  image_url text,
  raw_off_data jsonb,
  last_fetched_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX products_barcode_idx ON public.products(barcode);

GRANT SELECT, INSERT, UPDATE ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read products"
  ON public.products FOR SELECT
  USING (true);

CREATE POLICY "Public can insert products"
  ON public.products FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update products"
  ON public.products FOR UPDATE
  USING (true) WITH CHECK (true);