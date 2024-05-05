import Product from "@/models/products";
import connectMongodb from "@/util/dbConnection";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params: id }: { params: { id: string } }) {
  console.log(id);
  return NextResponse.json({ message: "done" });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await connectMongodb();
  const id = params.id;
  const body = await req.json();
  const { name, price } = body;
  const product = await Product.findByIdAndUpdate(
    id,
    {
      name,
      price,
    },
    { new: true },
  );

  if (!product) return NextResponse.json({ message: "Product not found" });

  return NextResponse.json({ message: "done" });
}
// export async function DELETE() {}
