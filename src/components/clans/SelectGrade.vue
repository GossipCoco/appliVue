<template>
    <div>

    </div>
</template>
<script>

import GradesJson from "../datas/grades.json"
export default {
    name: 'SelectGrade',
    data(){
        return{
            GradesJson: GradesJson,
            selectedGrad: ''
        }
    }
}
</script>