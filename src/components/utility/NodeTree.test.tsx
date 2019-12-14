﻿import ResumeNodeTree from "./NodeTree";

test('getNodeById Test', () => {
    const resumeData = [{
        type: 'FlexibleRow',
        children: [
            { type: 'FlexibleColumn' },
            { type: 'FlexibleColumn' }
        ]
    }];
    
    const data = new ResumeNodeTree(resumeData);
    const topNode = data.getNodeById([0]);

    expect(resumeData[0].type).toBe(topNode['type']);
    expect(resumeData[0].children[1].type).toBe(
        data.getNodeById([0, 1])['type']
    );
})