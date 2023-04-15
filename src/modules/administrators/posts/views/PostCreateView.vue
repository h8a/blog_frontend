<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const modules = {
    name: 'blotFormatter',
    module: BlotFormatter,
}

</script>

<template>
    <div>
        <h1>Post Create</h1>
        <div class="row">
            <div class="col-8">
                <div class="mb-3">
                    <label for="titlePost" class="form-label">Title post</label>
                    <input type="text" class="form-control" id="titlePost" placeholder="title post">
                </div>
                <div class="mb-3">
                    <label for="resumePost" class="form-label">Resume post</label>
                    <textarea class="form-control" id="resumePost" rows="3"></textarea>
                </div>
            </div>
            <div class="col-4 mt-2">
                <label>References</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Name reference" aria-label="Name reference">
                    <span class="input-group-text"><i data-feather="link"></i></span>
                    <input type="text" class="form-control" placeholder="Url" aria-label="Url">
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                </ul>
            </div>
        </div>
        <div class="row px-2">
            <div class="col-9">
                <div class="mb-3">
                    <label>Content</label>
                    <QuillEditor theme="snow" toolbar="full" :modules="modules" />
                </div>
            </div>
            <div class="col-3">
                <div class="row px-2">
                    <div class="col-10">
                        <label>Upload Media</label>
                        <div class="row">
                            <div class="col-10">
                                <input class="form-control" type="file" id="formFile">
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-primary">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row px-2 py-2">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Subheading</div>
                            Content for list item
                            </div>
                            <span class="badge bg-primary rounded-pill"><i data-feather="clipboard"></i></span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Subheading</div>
                            Content for list item
                            </div>
                            <span class="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                            <div class="fw-bold">Subheading</div>
                            Content for list item
                            </div>
                            <span class="badge bg-primary rounded-pill">14</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>