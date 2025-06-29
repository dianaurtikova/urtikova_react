import { useState, useEffect } from "react";
import Card from "../Card/Card";

interface PropsCards {
    id: number;
    title: string;
    body: string;
}
interface CardsProps {
    limit: number;
}