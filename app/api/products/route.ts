import Product from "@/models/products";
import connectMongodb from "@/util/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongodb();

  const products = await Product.find();
  return NextResponse.json({ products });
}

//POST

export async function POST(req: NextRequest) {
  await connectMongodb();
  const body = await req.json();
  const { name, price } = body;

  const product = new Product({ name, price });
  await product.save();

  return NextResponse.json("done");
}
