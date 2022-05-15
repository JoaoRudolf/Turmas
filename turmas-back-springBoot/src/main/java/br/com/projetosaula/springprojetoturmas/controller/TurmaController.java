package br.com.projetosaula.springprojetoturmas.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetosaula.springprojetoturmas.entity.Aluno;
import br.com.projetosaula.springprojetoturmas.entity.Professor;
import br.com.projetosaula.springprojetoturmas.entity.Turma;
import br.com.projetosaula.springprojetoturmas.repository.AlunoRepository;
import br.com.projetosaula.springprojetoturmas.repository.ProfessorRepository;
import br.com.projetosaula.springprojetoturmas.repository.TurmaRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/turma")
public class TurmaController {
	
	@Autowired
	TurmaRepository turmaRepository;
	
	@Autowired
	ProfessorRepository professorRepository;
	
	@Autowired
	AlunoRepository alunoRepository;

	@GetMapping
	public List<Turma> getAll() {
		return turmaRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Turma buscarPeloId(@PathVariable Long id) {
		return turmaRepository.findById(id).orElse(null);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Turma> addTurma(@RequestBody Turma turma) {
		Turma turmaResponse = turmaRepository.save(turma);
		return new ResponseEntity<Turma>(turmaResponse, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public HttpStatus remover(@PathVariable Long id) {
		Optional<Turma> turma = turmaRepository.findById(id);
		Professor[] professores = professorRepository.findAllByTurma(turma);
		Aluno[] alunos = alunoRepository.findAllByTurma(turma);
		
		if(professores.length == 0 && alunos.length == 0) {
			turmaRepository.deleteById(id);		
		} 
		return HttpStatus.OK;
		
	}

}
