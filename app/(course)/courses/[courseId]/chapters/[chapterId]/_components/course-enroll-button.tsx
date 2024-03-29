"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { Course } from "@prisma/client";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}
export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  return (
    <Button size="sm" className="w-full md:w-auto">
      Enroll for {formatPrice(price)}
    </Button>
  );
};
