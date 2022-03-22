{//Interfaces
    interface Point2D {
        x: number,
        y: number
    }

    //Extending an interface
    interface Point3D extends Point2D {
        z: number
    }

    const createPoint2D = (x: number, y: number): Point2D => {
        return { 
            x: x, 
            y: y 
        };
    }

    const createPoint3D = (x: number, y: number, z: number): Point3D => {
        return { 
            x: x, 
            y: y, 
            z: z 
        };
    }

    const convertPoint2DTo3D = (point2D: Point2D, z?: number): Point3D =>
    {
        return {
            ...point2D,
            z: (z ? z : 0)
        }
    }

    const position2D: Point2D = createPoint2D(100, 200);

    console.log(position2D);

    const position3D: Point3D = createPoint3D(100, 200, 300);

    console.log(position3D);

    const position3D2: Point3D = convertPoint2DTo3D(position2D);

    console.log(position3D2);

    const position3D3: Point3D = convertPoint2DTo3D(position2D, 10);

    console.log(position3D3);

}